import * as core from '@actions/core'
import * as fs from 'fs'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import { ReadableStream } from 'stream/web'
import { extractFull } from 'node-7z'
import path from 'path'
import os from 'os'

const PlatformMap = {
  darwin: 'mac',
  freebsd: 'linux',
  linux: 'linux',
  openbsd: 'linux',
  win32: 'windows'
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'qt-creator-downloader'))

// Download the url and save it to the specified file
async function downloadPackage(
  url: string,
  destination: string
): Promise<void> {
  const res = await fetch(url)
  if (!res.body) throw new Error('Response body is undefined')
  if (res.status !== 200) {
    throw new Error(`Failed to download ${url}: ${res.statusText}`)
  }
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' })
  return finished(Readable.fromWeb(res.body as ReadableStream).pipe(fileStream))
}

async function downloadQtC(urls: string[]): Promise<string[]> {
  const errors: string[] = []
  const packages = ['qtcreator.7z', 'qtcreator_dev.7z']
  for (const url of urls) {
    try {
      for (const packageName of packages) {
        const fullUrl = `${url}/${packageName}`
        console.log(`Downloading ${fullUrl}`)
        await downloadPackage(fullUrl, `${tmpDir}/${packageName}`)
      }
      return packages.map(packageName => `${tmpDir}/${packageName}`)
    } catch (error) {
      errors.push((error as Error).message)
    }
  }
  throw new Error(
    `Failed to download Qt Creator packages: ${errors.join('\n')}`
  )
}

async function extract(archive: string, destination: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const stream = extractFull(archive, destination, {
      $progress: true
    })
    stream.on('end', () => {
      resolve()
    })
    stream.on('error', error => {
      reject(error)
    })
  })
}

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    const destination: string = core.getInput('unzip-to')

    if (!(process.platform in PlatformMap)) {
      core.setFailed(`Unsupported platform: ${process.platform}`)
      return
    }

    const platformName: string =
      PlatformMap[process.platform as keyof typeof PlatformMap]
    const arch = process.platform === 'darwin' ? 'x64' : process.arch
    const platform = `${platformName}_${arch}`

    // Extract the major and minor versions
    const [major, minor] = version.split('.').slice(0, 2)
    const folderPath = `${major}.${minor}/${version}`

    const urls = [
      `https://download.qt.io/official_releases/qtcreator/${folderPath}/installer_source/${platform}`,
      `https://download.qt.io/snapshots/qtcreator/${folderPath}/installer_source/latest/${platform}`
    ]

    const packages = await downloadQtC(urls)

    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true })
    }

    for (const packageFile of packages) {
      // Unzip the downloaded file
      console.log(`Unzipping package: ${packageFile}`)
      await extract(packageFile, destination)
    }

    console.log(`Qt Creator ${version} has been extracted to ${destination}`)

    // Set outputs for other workflow steps to use
    core.setOutput('path', destination)
    core.setOutput(
      'path-with-slashes',
      path.resolve(destination).split(path.sep).join('/')
    )
  } catch (error) {
    console.log('Error:', error)
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
