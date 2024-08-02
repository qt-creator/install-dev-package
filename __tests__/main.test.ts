/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from '@actions/core'
import * as main from '../src/main'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

// Mock the action's main function
const runMock = jest.spyOn(main, 'run')

jest.setTimeout(60 * 1000)

const tmpDir = fs.mkdtempSync(
  path.join(os.tmpdir(), 'qt-creator-downloader-test')
)

// Other utilities

// Mock the GitHub Actions core library
let errorMock: jest.SpiedFunction<typeof core.error>
let getInputMock: jest.SpiedFunction<typeof core.getInput>
let setOutputMock: jest.SpiedFunction<typeof core.setOutput>

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    errorMock = jest.spyOn(core, 'error').mockImplementation()
    getInputMock = jest.spyOn(core, 'getInput').mockImplementation()
    setOutputMock = jest.spyOn(core, 'setOutput').mockImplementation()
  })

  it('downloads 14.0.0', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'version':
          return '15.0.0-beta1'
        case 'unzip-to':
          return tmpDir
        default:
          return ''
      }
    })

    await main.run()
    expect(runMock).toHaveReturned()
    expect(errorMock).not.toHaveBeenCalled()

    expect(setOutputMock).toHaveBeenCalledWith(
      'path',
      expect.stringContaining(tmpDir)
    )
    expect(setOutputMock).toHaveBeenCalledWith(
      'path-with-slashes',
      expect.not.stringContaining('\\')
    )
  })
})
