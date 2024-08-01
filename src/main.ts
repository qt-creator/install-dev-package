import * as core from '@actions/core'
import * as fs from 'fs'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import { ReadableStream } from 'stream/web'
import { extractFull } from 'node-7z'

const PlatformMap = {
  darwin: 'mac',
  freebsd: 'linux',
  linux: 'linux',
  openbsd: 'linux',
  win32: 'windows'
}

// Download the url and save it to the specified file
async function downloadPackage(
  url: string,
  destination: string
): Promise<void> {
  const res = await fetch(url)
  if (!res.body) throw new Error('Response body is undefined')
  const fileStream = fs.createWriteStream(destination, { flags: 'wx' })
  return finished(Readable.fromWeb(res.body as ReadableStream).pipe(fileStream))
}

async function downloadQtC(urls: string[]): Promise<string[]> {
  const packages = ['qtcreator.7z', 'qtcreator_dev.7z']
  for (const url of urls) {
    try {
      console.log(`Downloading from ${url}`)
      for (const packageName of packages) {
        await downloadPackage(`${url}/${packageName}`, packageName)
      }
      return packages
    } catch (error) {
      console.error(`Failed to download from ${url}:`, error)
    }
  }
  throw new Error('Failed to download Qt Creator packages')
}

async function extract(archive: string, destination: string): Promise<void> {
  const stream = extractFull(archive, destination, { $progress: true })
  let lastProgress = 0
  stream.on('progress', progress => {
    if (progress.percent === lastProgress) return
    lastProgress = progress.percent
    console.log(`${progress.percent}%`)
  })

  return finished(stream)
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
    const platform = `${platformName}_${process.arch}`

    // Extract the major and minor versions
    const [major, minor] = version.split('.').slice(0, 2)
    const folderPath = `${major}.${minor}/${version}/`

    const urls = [
      `https://download.qt.io/official_releases/qtcreator/${folderPath}/installer_source/${platform}`,
      `https://download.qt.io/snapshots/qtcreator/${folderPath}/installer_source/latest/${platform}`
    ]

    const packages = await downloadQtC(urls)
    console.log('Downloaded Qt Creator packages')

    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true })
    }
    // Unzip the downloaded file
    console.log('Unzipping Qt Creator packages')

    for (const packageFile of packages) {
      await extract(packageFile, destination)
    }

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
