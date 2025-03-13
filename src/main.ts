import * as core from '@actions/core'
import * as fs from 'fs'
import { Readable } from 'stream'
import { finished } from 'stream/promises'
import { ReadableStream } from 'stream/web'
import path from 'path'
import os from 'os'
import util from 'util'
import { readFile, writeFile, mkdir, symlink } from 'node:fs/promises'
import { ArchiveReader, libarchiveWasm } from 'libarchive-wasm'

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
        core.info(`Downloading ${fullUrl}`)
        await downloadPackage(fullUrl, `${tmpDir}/${packageName}`)
      }
      return packages.map(packageName => `${tmpDir}/${packageName}`)
    } catch (error) {
      core.warning(util.inspect(error))
      errors.push(util.inspect(error))
    }
  }
  throw new Error(
    `Failed to download Qt Creator packages: ${errors.join('\n')}`
  )
}

async function extract(archive: string, destination: string): Promise<void> {
  console.log('Extracting', archive, 'to', destination)
  const data = await readFile(archive)
  const mod = await libarchiveWasm()
  const reader = new ArchiveReader(mod, new Int8Array(data))
  for (const entry of reader.entries()) {
    const type = entry.getFiletype()
    const pathName = entry.getPathname()
    const destinationPath = path.join(destination, pathName)

    if (path.isAbsolute(pathName)) {
      throw new Error('Absolute path in archive detected, aborting.')
    }

    if (type === 'Directory') {
      if (!fs.existsSync(destinationPath)) {
        await mkdir(destinationPath)
      } else if (!fs.statSync(destinationPath).isDirectory()) {
        throw new Error(
          `Path already exists and is not a directory: ${destinationPath}`
        )
      }
      continue
    } else if (type === 'SymbolicLink') {
      await symlink(entry.getSymlinkTarget(), destinationPath)
      continue
    } else if (type === 'File') {
      const size = entry.getSize()
      if (size > 0) {
        const entryData = entry.readData()
        if (!entryData) throw new Error(`Failed to read data for ${pathName}`)
        await writeFile(destinationPath, entryData)
      } else {
        await writeFile(destinationPath, '')
      }
    } else {
      throw new Error(`Unsupported entry type: ${type}`)
    }
  }
  reader.free()
}

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    const destination: string = core.getInput('unzip-to')
    const platformInput: string = core.getInput('platform')

    if (!platformInput && !(process.platform in PlatformMap)) {
      core.setFailed(`Unsupported platform: ${process.platform}`)
      return
    }

    const platformName: string =
      PlatformMap[process.platform as keyof typeof PlatformMap]
    const arch = process.platform === 'darwin' ? 'x64' : process.arch

    const platform = platformInput ? platformInput : `${platformName}_${arch}`

    // Extract the major and minor versions
    const [major, minor] = version.split('.').slice(0, 2)
    const folderPath = `${major}.${minor}/${version}`

    const urls = [
      `https://download.qt.io/official_releases/qtcreator/${folderPath}/installer_source/${platform}`,
      `https://download.qt.io/development_releases/qtcreator/${folderPath}/installer_source/${platform}`,
      `https://download.qt.io/snapshots/qtcreator/${folderPath}/installer_source/latest/${platform}`
    ]

    const packages = await downloadQtC(urls)

    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true })
    }

    for (const packageFile of packages) {
      // Unzip the downloaded file
      core.info(`Unzipping package: ${packageFile}`)
      await extract(packageFile, destination)
    }

    core.info(`Qt Creator ${version} has been extracted to ${destination}`)

    // Set outputs for other workflow steps to use
    core.setOutput('path', destination)
    core.setOutput(
      'path-with-slashes',
      path.resolve(destination).split(path.sep).join('/')
    )
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(util.inspect(error))
  }
}
