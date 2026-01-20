require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 914:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 484:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(914);
const file_command_1 = __nccwpck_require__(753);
const utils_1 = __nccwpck_require__(302);
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(928));
const oidc_utils_1 = __nccwpck_require__(306);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode || (exports.ExitCode = ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = (0, utils_1.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    }
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    (0, command_1.issueCommand)('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
    }
    else {
        (0, command_1.issueCommand)('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    process.stdout.write(os.EOL);
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    (0, command_1.issueCommand)('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    (0, command_1.issue)('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    (0, command_1.issue)('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(847);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(847);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(976);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(968));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 753:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const crypto = __importStar(__nccwpck_require__(982));
const fs = __importStar(__nccwpck_require__(896));
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 306:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(844);
const auth_1 = __nccwpck_require__(552);
const core_1 = __nccwpck_require__(484);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                (0, core_1.setSecret)(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 976:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(928));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 968:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(857));
const exec = __importStar(__nccwpck_require__(236));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 847:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(857);
const fs_1 = __nccwpck_require__(896);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(193);
const tr = __importStar(__nccwpck_require__(665));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 665:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(857));
const events = __importStar(__nccwpck_require__(434));
const child = __importStar(__nccwpck_require__(317));
const path = __importStar(__nccwpck_require__(928));
const io = __importStar(__nccwpck_require__(994));
const ioUtil = __importStar(__nccwpck_require__(207));
const timers_1 = __nccwpck_require__(557);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 552:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 844:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(611));
const https = __importStar(__nccwpck_require__(692));
const pm = __importStar(__nccwpck_require__(988));
const tunnel = __importStar(__nccwpck_require__(770));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
    readBodyBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const chunks = [];
                this.message.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                this.message.on('end', () => {
                    resolve(Buffer.concat(chunks));
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 988:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        try {
            return new URL(proxyVar);
        }
        catch (_a) {
            if (!proxyVar.startsWith('http://') && !proxyVar.startsWith('https://'))
                return new URL(`http://${proxyVar}`);
        }
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const reqHost = reqUrl.hostname;
    if (isLoopbackAddress(reqHost)) {
        return true;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperNoProxyItem === '*' ||
            upperReqHosts.some(x => x === upperNoProxyItem ||
                x.endsWith(`.${upperNoProxyItem}`) ||
                (upperNoProxyItem.startsWith('.') &&
                    x.endsWith(`${upperNoProxyItem}`)))) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
function isLoopbackAddress(host) {
    const hostLower = host.toLowerCase();
    return (hostLower === 'localhost' ||
        hostLower.startsWith('127.') ||
        hostLower.startsWith('[::1]') ||
        hostLower.startsWith('[0:0:0:0:0:0:0:1]'));
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 207:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(896));
const path = __importStar(__nccwpck_require__(928));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 994:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(613);
const path = __importStar(__nccwpck_require__(928));
const ioUtil = __importStar(__nccwpck_require__(207));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 570:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArchiveReader = void 0;
/* eslint-disable no-underscore-dangle */
var ArchiveReaderEntry_1 = __nccwpck_require__(684);
/**
 * Specifies how many milliseconds make up a second.
 *
 * This constant allows the conversion of the C `time_t` type into JavaScript-friendly `Date` time.
 */
var ONE_SEC_IN_MS = 1000;
var ArchiveReader = /** @class */ (function () {
    function ArchiveReader(libarchive, data, passphrase) {
        var ptr = libarchive.module._malloc(data.length);
        libarchive.module.HEAP8.set(data, ptr);
        this.libarchive = libarchive;
        this.archive = libarchive.read_new_memory(ptr, data.length, passphrase);
        this.pointer = ptr;
    }
    ArchiveReader.prototype.free = function () {
        this.libarchive.read_free(this.archive);
        this.libarchive.module._free(this.pointer);
        this.libarchive = null;
        this.archive = null;
        this.pointer = null;
    };
    ArchiveReader.prototype.hasEncryptedData = function () {
        var code = this.libarchive.read_has_encrypted_entries(this.archive);
        return code < 0 ? null : !!code;
    };
    ArchiveReader.prototype.readData = function (size) {
        var eptr = this.libarchive.module._malloc(size);
        var esize = this.libarchive.read_data(this.archive, eptr, size);
        var data = this.libarchive.module.HEAP8.slice(eptr, eptr + esize);
        this.libarchive.module._free(eptr);
        return data;
    };
    ArchiveReader.prototype.skipData = function () {
        this.libarchive.read_data_skip(this.archive);
    };
    ArchiveReader.prototype.nextEntryPointer = function () {
        return this.libarchive.read_next_entry(this.archive);
    };
    ArchiveReader.prototype.getEntryFiletype = function (ptr) {
        return ArchiveReader.FileTypes["".concat(this.libarchive.entry_filetype(ptr))] || 'Invalid';
    };
    ArchiveReader.prototype.getEntryPathname = function (ptr) {
        return this.libarchive.entry_pathname(ptr);
    };
    ArchiveReader.prototype.getEntrySize = function (ptr) {
        return this.libarchive.entry_size(ptr);
    };
    ArchiveReader.prototype.getCreationTime = function (ptr) {
        return this.libarchive.entry_ctime(ptr) * ONE_SEC_IN_MS; // convert secs to ms
    };
    ArchiveReader.prototype.getModificationTime = function (ptr) {
        return this.libarchive.entry_mtime(ptr) * ONE_SEC_IN_MS; // convert secs to ms
    };
    ArchiveReader.prototype.isEntryEncrypted = function (ptr) {
        return !!this.libarchive.entry_is_encrypted(ptr);
    };
    ArchiveReader.prototype.getSymlinkTarget = function (ptr) {
        return this.libarchive.entry_symlink(ptr);
    };
    ArchiveReader.prototype.getHardlinkTarget = function (ptr) {
        return this.libarchive.entry_hardlink(ptr);
    };
    ArchiveReader.prototype.nextEntry = function () {
        var entryPtr = this.nextEntryPointer();
        if (entryPtr === 0)
            return null;
        return new ArchiveReaderEntry_1.ArchiveReaderEntry(this, entryPtr);
    };
    ArchiveReader.prototype.forEach = function (fn) {
        for (;;) {
            var entry = this.nextEntry();
            if (!entry)
                break;
            fn(entry);
            entry.free();
        }
    };
    ArchiveReader.prototype.entries = function () {
        var entry;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entry = this.nextEntry();
                    if (!entry)
                        return [3 /*break*/, 3];
                    return [4 /*yield*/, entry];
                case 1:
                    _a.sent();
                    entry.free();
                    _a.label = 2;
                case 2: return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    };
    ArchiveReader.FileTypes = (_a = {},
        _a["".concat(61440)] = 'Mount',
        _a["".concat(32768)] = 'File',
        _a["".concat(40960)] = 'SymbolicLink',
        _a["".concat(49152)] = 'Socket',
        _a["".concat(8192)] = 'CharacterDevice',
        _a["".concat(24576)] = 'BlockDevice',
        _a["".concat(16384)] = 'Directory',
        _a["".concat(4096)] = 'NamedPipe',
        _a);
    return ArchiveReader;
}());
exports.ArchiveReader = ArchiveReader;


/***/ }),

/***/ 684:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArchiveReaderEntry = void 0;
var ArchiveReaderEntry = /** @class */ (function () {
    function ArchiveReaderEntry(reader, ptr) {
        this.reader = reader;
        this.pointer = ptr;
        this.readCalled = false;
    }
    ArchiveReaderEntry.prototype.free = function () {
        this.skipData();
        this.reader = null;
        this.pointer = null;
    };
    ArchiveReaderEntry.prototype.readData = function () {
        if (this.readCalled)
            throw new Error('It has already been called.');
        var size = this.getSize();
        if (!size) {
            this.skipData();
            return undefined;
        }
        this.readCalled = true;
        return this.reader.readData(size);
    };
    ArchiveReaderEntry.prototype.skipData = function () {
        if (this.readCalled)
            return;
        this.readCalled = true;
        this.reader.skipData();
    };
    ArchiveReaderEntry.prototype.getFiletype = function () {
        return this.reader.getEntryFiletype(this.pointer);
    };
    ArchiveReaderEntry.prototype.getPathname = function () {
        return this.reader.getEntryPathname(this.pointer);
    };
    ArchiveReaderEntry.prototype.getSize = function () {
        return this.reader.getEntrySize(this.pointer);
    };
    ArchiveReaderEntry.prototype.getCreationTime = function () {
        return this.reader.getCreationTime(this.pointer);
    };
    ArchiveReaderEntry.prototype.getModificationTime = function () {
        return this.reader.getModificationTime(this.pointer);
    };
    ArchiveReaderEntry.prototype.isEncrypted = function () {
        return this.reader.isEntryEncrypted(this.pointer);
    };
    ArchiveReaderEntry.prototype.getSymlinkTarget = function () {
        return this.reader.getSymlinkTarget(this.pointer);
    };
    ArchiveReaderEntry.prototype.getHardlinkTarget = function () {
        return this.reader.getHardlinkTarget(this.pointer);
    };
    return ArchiveReaderEntry;
}());
exports.ArchiveReaderEntry = ArchiveReaderEntry;


/***/ }),

/***/ 339:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.libarchive = void 0;
var libarchive_1 = __importDefault(__nccwpck_require__(620));
exports.libarchive = libarchive_1.default;
__exportStar(__nccwpck_require__(452), exports);
__exportStar(__nccwpck_require__(808), exports);
__exportStar(__nccwpck_require__(570), exports);


/***/ }),

/***/ 620:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

var libarchive = (function () {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    if (typeof __filename !== 'undefined')
        _scriptDir = _scriptDir || __filename;
    return (function (moduleArg) {
        if (moduleArg === void 0) { moduleArg = {}; }
        var Module = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise((function (resolve, reject) { readyPromiseResolve = resolve; readyPromiseReject = reject; }));
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = function (status, toThrow) { throw toThrow; };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) { if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
        } return scriptDirectory + path; }
        var read_, readAsync, readBinary, setWindowTitle;
        if (ENVIRONMENT_IS_NODE) {
            var fs = __nccwpck_require__(896);
            var nodePath = __nccwpck_require__(928);
            if (ENVIRONMENT_IS_WORKER) {
                scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
            }
            else {
                scriptDirectory = __dirname + "/";
            }
            read_ = function (filename, binary) { filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename); return fs.readFileSync(filename, binary ? undefined : "utf8"); };
            readBinary = function (filename) { var ret = read_(filename, true); if (!ret.buffer) {
                ret = new Uint8Array(ret);
            } return ret; };
            readAsync = function (filename, onload, onerror, binary) {
                if (binary === void 0) { binary = true; }
                filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
                fs.readFile(filename, binary ? undefined : "utf8", (function (err, data) { if (err)
                    onerror(err);
                else
                    onload(binary ? data.buffer : data); }));
            };
            if (!Module["thisProgram"] && process.argv.length > 1) {
                thisProgram = process.argv[1].replace(/\\/g, "/");
            }
            arguments_ = process.argv.slice(2);
            quit_ = function (status, toThrow) { process.exitCode = status; throw toThrow; };
            Module["inspect"] = function () { return "[Emscripten Module object]"; };
        }
        else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
                scriptDirectory = self.location.href;
            }
            else if (typeof document != "undefined" && document.currentScript) {
                scriptDirectory = document.currentScript.src;
            }
            if (_scriptDir) {
                scriptDirectory = _scriptDir;
            }
            if (scriptDirectory.indexOf("blob:") !== 0) {
                scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            }
            else {
                scriptDirectory = "";
            }
            {
                read_ = function (url) { var xhr = new XMLHttpRequest; xhr.open("GET", url, false); xhr.send(null); return xhr.responseText; };
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = function (url) { var xhr = new XMLHttpRequest; xhr.open("GET", url, false); xhr.responseType = "arraybuffer"; xhr.send(null); return new Uint8Array(xhr.response); };
                }
                readAsync = function (url, onload, onerror) { var xhr = new XMLHttpRequest; xhr.open("GET", url, true); xhr.responseType = "arraybuffer"; xhr.onload = function () { if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return;
                } onerror(); }; xhr.onerror = onerror; xhr.send(null); };
            }
            setWindowTitle = function (title) { return document.title = title; };
        }
        else { }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"])
            arguments_ = Module["arguments"];
        if (Module["thisProgram"])
            thisProgram = Module["thisProgram"];
        if (Module["quit"])
            quit_ = Module["quit"];
        var wasmBinary;
        if (Module["wasmBinary"])
            wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
            abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) { if (!condition) {
            abort(text);
        } }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() { var b = wasmMemory.buffer; Module["HEAP8"] = HEAP8 = new Int8Array(b); Module["HEAP16"] = HEAP16 = new Int16Array(b); Module["HEAP32"] = HEAP32 = new Int32Array(b); Module["HEAPU8"] = HEAPU8 = new Uint8Array(b); Module["HEAPU16"] = HEAPU16 = new Uint16Array(b); Module["HEAPU32"] = HEAPU32 = new Uint32Array(b); Module["HEAPF32"] = HEAPF32 = new Float32Array(b); Module["HEAPF64"] = HEAPF64 = new Float64Array(b); }
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        var runtimeKeepaliveCounter = 0;
        function keepRuntimeAlive() { return noExitRuntime || runtimeKeepaliveCounter > 0; }
        function preRun() { if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
                Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
                addOnPreRun(Module["preRun"].shift());
            }
        } callRuntimeCallbacks(__ATPRERUN__); }
        function initRuntime() { runtimeInitialized = true; if (!Module["noFSInit"] && !FS.init.initialized)
            FS.init(); FS.ignorePermissions = false; TTY.init(); PIPEFS.root = FS.mount(PIPEFS, {}, null); callRuntimeCallbacks(__ATINIT__); }
        function postRun() { if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
                Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
                addOnPostRun(Module["postRun"].shift());
            }
        } callRuntimeCallbacks(__ATPOSTRUN__); }
        function addOnPreRun(cb) { __ATPRERUN__.unshift(cb); }
        function addOnInit(cb) { __ATINIT__.unshift(cb); }
        function addOnPostRun(cb) { __ATPOSTRUN__.unshift(cb); }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function getUniqueRunDependency(id) { return id; }
        function addRunDependency(id) { runDependencies++; if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
        } }
        function removeRunDependency(id) { runDependencies--; if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
        } if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
                clearInterval(runDependencyWatcher);
                runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
            }
        } }
        function abort(what) { if (Module["onAbort"]) {
            Module["onAbort"](what);
        } what = "Aborted(" + what + ")"; err(what); ABORT = true; EXITSTATUS = 1; what += ". Build with -sASSERTIONS for more info."; var e = new WebAssembly.RuntimeError(what); readyPromiseReject(e); throw e; }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) { return filename.startsWith(dataURIPrefix); }
        function isFileURI(filename) { return filename.startsWith("file://"); }
        var wasmBinaryFile;
        wasmBinaryFile = "libarchive.wasm";
        if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinarySync(file) { if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
        } if (readBinary) {
            return readBinary(file);
        } throw "both async and sync fetching of the wasm failed"; }
        function getBinaryPromise(binaryFile) { if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(binaryFile)) {
                return fetch(binaryFile, { credentials: "same-origin" }).then((function (response) { if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + binaryFile + "'";
                } return response["arrayBuffer"](); })).catch((function () { return getBinarySync(binaryFile); }));
            }
            else if (readAsync) {
                return new Promise((function (resolve, reject) { readAsync(binaryFile, (function (response) { return resolve(new Uint8Array(response)); }), reject); }));
            }
        } return Promise.resolve().then((function () { return getBinarySync(binaryFile); })); }
        function instantiateArrayBuffer(binaryFile, imports, receiver) { return getBinaryPromise(binaryFile).then((function (binary) { return WebAssembly.instantiate(binary, imports); })).then((function (instance) { return instance; })).then(receiver, (function (reason) { err("failed to asynchronously prepare wasm: " + reason); abort(reason); })); }
        function instantiateAsync(binary, binaryFile, imports, callback) { if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
            return fetch(binaryFile, { credentials: "same-origin" }).then((function (response) { var result = WebAssembly.instantiateStreaming(response, imports); return result.then(callback, (function (reason) { err("wasm streaming compile failed: " + reason); err("falling back to ArrayBuffer instantiation"); return instantiateArrayBuffer(binaryFile, imports, callback); })); }));
        } return instantiateArrayBuffer(binaryFile, imports, callback); }
        function createWasm() { var info = { "a": wasmImports }; function receiveInstance(instance, module) { var exports = instance.exports; Module["asm"] = exports; wasmMemory = Module["asm"]["x"]; updateMemoryViews(); wasmTable = Module["asm"]["G"]; addOnInit(Module["asm"]["y"]); removeRunDependency("wasm-instantiate"); return exports; } addRunDependency("wasm-instantiate"); function receiveInstantiationResult(result) { receiveInstance(result["instance"]); } if (Module["instantiateWasm"]) {
            try {
                return Module["instantiateWasm"](info, receiveInstance);
            }
            catch (e) {
                err("Module.instantiateWasm callback failed with error: " + e);
                readyPromiseReject(e);
            }
        } instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject); return {}; }
        var tempDouble;
        var tempI64;
        function ExitStatus(status) { this.name = "ExitStatus"; this.message = "Program terminated with exit(".concat(status, ")"); this.status = status; }
        var callRuntimeCallbacks = function (callbacks) { while (callbacks.length > 0) {
            callbacks.shift()(Module);
        } };
        var PATH = { isAbs: function (path) { return path.charAt(0) === "/"; }, splitPath: function (filename) { var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/; return splitPathRe.exec(filename).slice(1); }, normalizeArray: function (parts, allowAboveRoot) { var up = 0; for (var i = parts.length - 1; i >= 0; i--) {
                var last = parts[i];
                if (last === ".") {
                    parts.splice(i, 1);
                }
                else if (last === "..") {
                    parts.splice(i, 1);
                    up++;
                }
                else if (up) {
                    parts.splice(i, 1);
                    up--;
                }
            } if (allowAboveRoot) {
                for (; up; up--) {
                    parts.unshift("..");
                }
            } return parts; }, normalize: function (path) { var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/"; path = PATH.normalizeArray(path.split("/").filter((function (p) { return !!p; })), !isAbsolute).join("/"); if (!path && !isAbsolute) {
                path = ".";
            } if (path && trailingSlash) {
                path += "/";
            } return (isAbsolute ? "/" : "") + path; }, dirname: function (path) { var result = PATH.splitPath(path), root = result[0], dir = result[1]; if (!root && !dir) {
                return ".";
            } if (dir) {
                dir = dir.substr(0, dir.length - 1);
            } return root + dir; }, basename: function (path) { if (path === "/")
                return "/"; path = PATH.normalize(path); path = path.replace(/\/$/, ""); var lastSlash = path.lastIndexOf("/"); if (lastSlash === -1)
                return path; return path.substr(lastSlash + 1); }, join: function () { var paths = Array.prototype.slice.call(arguments); return PATH.normalize(paths.join("/")); }, join2: function (l, r) { return PATH.normalize(l + "/" + r); } };
        var initRandomFill = function () { if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
            return function (view) { return crypto.getRandomValues(view); };
        }
        else if (ENVIRONMENT_IS_NODE) {
            try {
                var crypto_module = __nccwpck_require__(982);
                var randomFillSync = crypto_module["randomFillSync"];
                if (randomFillSync) {
                    return function (view) { return crypto_module["randomFillSync"](view); };
                }
                var randomBytes = crypto_module["randomBytes"];
                return function (view) { return (view.set(randomBytes(view.byteLength)), view); };
            }
            catch (e) { }
        } abort("initRandomDevice"); };
        var randomFill = function (view) { return (randomFill = initRandomFill())(view); };
        var PATH_FS = { resolve: function () { var resolvedPath = "", resolvedAbsolute = false; for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                var path = i >= 0 ? arguments[i] : FS.cwd();
                if (typeof path != "string") {
                    throw new TypeError("Arguments to path.resolve must be strings");
                }
                else if (!path) {
                    return "";
                }
                resolvedPath = path + "/" + resolvedPath;
                resolvedAbsolute = PATH.isAbs(path);
            } resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((function (p) { return !!p; })), !resolvedAbsolute).join("/"); return (resolvedAbsolute ? "/" : "") + resolvedPath || "."; }, relative: function (from, to) { from = PATH_FS.resolve(from).substr(1); to = PATH_FS.resolve(to).substr(1); function trim(arr) { var start = 0; for (; start < arr.length; start++) {
                if (arr[start] !== "")
                    break;
            } var end = arr.length - 1; for (; end >= 0; end--) {
                if (arr[end] !== "")
                    break;
            } if (start > end)
                return []; return arr.slice(start, end - start + 1); } var fromParts = trim(from.split("/")); var toParts = trim(to.split("/")); var length = Math.min(fromParts.length, toParts.length); var samePartsLength = length; for (var i = 0; i < length; i++) {
                if (fromParts[i] !== toParts[i]) {
                    samePartsLength = i;
                    break;
                }
            } var outputParts = []; for (var i = samePartsLength; i < fromParts.length; i++) {
                outputParts.push("..");
            } outputParts = outputParts.concat(toParts.slice(samePartsLength)); return outputParts.join("/"); } };
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
        var UTF8ArrayToString = function (heapOrArray, idx, maxBytesToRead) { var endIdx = idx + maxBytesToRead; var endPtr = idx; while (heapOrArray[endPtr] && !(endPtr >= endIdx))
            ++endPtr; if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
        } var str = ""; while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            }
            else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0);
            }
            else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
        } return str; };
        var FS_stdin_getChar_buffer = [];
        var lengthBytesUTF8 = function (str) { var len = 0; for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
                len++;
            }
            else if (c <= 2047) {
                len += 2;
            }
            else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
            }
            else {
                len += 3;
            }
        } return len; };
        var stringToUTF8Array = function (str, heap, outIdx, maxBytesToWrite) { if (!(maxBytesToWrite > 0))
            return 0; var startIdx = outIdx; var endIdx = outIdx + maxBytesToWrite - 1; for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
                if (outIdx >= endIdx)
                    break;
                heap[outIdx++] = u;
            }
            else if (u <= 2047) {
                if (outIdx + 1 >= endIdx)
                    break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
            }
            else if (u <= 65535) {
                if (outIdx + 2 >= endIdx)
                    break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
            }
            else {
                if (outIdx + 3 >= endIdx)
                    break;
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
            }
        } heap[outIdx] = 0; return outIdx - startIdx; };
        function intArrayFromString(stringy, dontAddNull, length) { var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1; var u8array = new Array(len); var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length); if (dontAddNull)
            u8array.length = numBytesWritten; return u8array; }
        var FS_stdin_getChar = function () { if (!FS_stdin_getChar_buffer.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
                var BUFSIZE = 256;
                var buf = Buffer.alloc(BUFSIZE);
                var bytesRead = 0;
                var fd = process.stdin.fd;
                try {
                    bytesRead = fs.readSync(fd, buf, 0, BUFSIZE, -1);
                }
                catch (e) {
                    if (e.toString().includes("EOF"))
                        bytesRead = 0;
                    else
                        throw e;
                }
                if (bytesRead > 0) {
                    result = buf.slice(0, bytesRead).toString("utf-8");
                }
                else {
                    result = null;
                }
            }
            else if (typeof window != "undefined" && typeof window.prompt == "function") {
                result = window.prompt("Input: ");
                if (result !== null) {
                    result += "\n";
                }
            }
            else if (typeof readline == "function") {
                result = readline();
                if (result !== null) {
                    result += "\n";
                }
            }
            if (!result) {
                return null;
            }
            FS_stdin_getChar_buffer = intArrayFromString(result, true);
        } return FS_stdin_getChar_buffer.shift(); };
        var TTY = { ttys: [], init: function () { }, shutdown: function () { }, register: function (dev, ops) { TTY.ttys[dev] = { input: [], output: [], ops: ops }; FS.registerDevice(dev, TTY.stream_ops); }, stream_ops: { open: function (stream) { var tty = TTY.ttys[stream.node.rdev]; if (!tty) {
                    throw new FS.ErrnoError(43);
                } stream.tty = tty; stream.seekable = false; }, close: function (stream) { stream.tty.ops.fsync(stream.tty); }, fsync: function (stream) { stream.tty.ops.fsync(stream.tty); }, read: function (stream, buffer, offset, length, pos) { if (!stream.tty || !stream.tty.ops.get_char) {
                    throw new FS.ErrnoError(60);
                } var bytesRead = 0; for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = stream.tty.ops.get_char(stream.tty);
                    }
                    catch (e) {
                        throw new FS.ErrnoError(29);
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(6);
                    }
                    if (result === null || result === undefined)
                        break;
                    bytesRead++;
                    buffer[offset + i] = result;
                } if (bytesRead) {
                    stream.node.timestamp = Date.now();
                } return bytesRead; }, write: function (stream, buffer, offset, length, pos) { if (!stream.tty || !stream.tty.ops.put_char) {
                    throw new FS.ErrnoError(60);
                } try {
                    for (var i = 0; i < length; i++) {
                        stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                    }
                }
                catch (e) {
                    throw new FS.ErrnoError(29);
                } if (length) {
                    stream.node.timestamp = Date.now();
                } return i; } }, default_tty_ops: { get_char: function (tty) { return FS_stdin_getChar(); }, put_char: function (tty, val) { if (val === null || val === 10) {
                    out(UTF8ArrayToString(tty.output, 0));
                    tty.output = [];
                }
                else {
                    if (val != 0)
                        tty.output.push(val);
                } }, fsync: function (tty) { if (tty.output && tty.output.length > 0) {
                    out(UTF8ArrayToString(tty.output, 0));
                    tty.output = [];
                } }, ioctl_tcgets: function (tty) { return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }; }, ioctl_tcsets: function (tty, optional_actions, data) { return 0; }, ioctl_tiocgwinsz: function (tty) { return [24, 80]; } }, default_tty1_ops: { put_char: function (tty, val) { if (val === null || val === 10) {
                    err(UTF8ArrayToString(tty.output, 0));
                    tty.output = [];
                }
                else {
                    if (val != 0)
                        tty.output.push(val);
                } }, fsync: function (tty) { if (tty.output && tty.output.length > 0) {
                    err(UTF8ArrayToString(tty.output, 0));
                    tty.output = [];
                } } } };
        var mmapAlloc = function (size) { abort(); };
        var MEMFS = { ops_table: null, mount: function (mount) { return MEMFS.createNode(null, "/", 16384 | 511, 0); }, createNode: function (parent, name, mode, dev) { if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
                throw new FS.ErrnoError(63);
            } if (!MEMFS.ops_table) {
                MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } };
            } var node = FS.createNode(parent, name, mode, dev); if (FS.isDir(node.mode)) {
                node.node_ops = MEMFS.ops_table.dir.node;
                node.stream_ops = MEMFS.ops_table.dir.stream;
                node.contents = {};
            }
            else if (FS.isFile(node.mode)) {
                node.node_ops = MEMFS.ops_table.file.node;
                node.stream_ops = MEMFS.ops_table.file.stream;
                node.usedBytes = 0;
                node.contents = null;
            }
            else if (FS.isLink(node.mode)) {
                node.node_ops = MEMFS.ops_table.link.node;
                node.stream_ops = MEMFS.ops_table.link.stream;
            }
            else if (FS.isChrdev(node.mode)) {
                node.node_ops = MEMFS.ops_table.chrdev.node;
                node.stream_ops = MEMFS.ops_table.chrdev.stream;
            } node.timestamp = Date.now(); if (parent) {
                parent.contents[name] = node;
                parent.timestamp = node.timestamp;
            } return node; }, getFileDataAsTypedArray: function (node) { if (!node.contents)
                return new Uint8Array(0); if (node.contents.subarray)
                return node.contents.subarray(0, node.usedBytes); return new Uint8Array(node.contents); }, expandFileStorage: function (node, newCapacity) { var prevCapacity = node.contents ? node.contents.length : 0; if (prevCapacity >= newCapacity)
                return; var CAPACITY_DOUBLING_MAX = 1024 * 1024; newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0); if (prevCapacity != 0)
                newCapacity = Math.max(newCapacity, 256); var oldContents = node.contents; node.contents = new Uint8Array(newCapacity); if (node.usedBytes > 0)
                node.contents.set(oldContents.subarray(0, node.usedBytes), 0); }, resizeFileStorage: function (node, newSize) { if (node.usedBytes == newSize)
                return; if (newSize == 0) {
                node.contents = null;
                node.usedBytes = 0;
            }
            else {
                var oldContents = node.contents;
                node.contents = new Uint8Array(newSize);
                if (oldContents) {
                    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
                }
                node.usedBytes = newSize;
            } }, node_ops: { getattr: function (node) { var attr = {}; attr.dev = FS.isChrdev(node.mode) ? node.id : 1; attr.ino = node.id; attr.mode = node.mode; attr.nlink = 1; attr.uid = 0; attr.gid = 0; attr.rdev = node.rdev; if (FS.isDir(node.mode)) {
                    attr.size = 4096;
                }
                else if (FS.isFile(node.mode)) {
                    attr.size = node.usedBytes;
                }
                else if (FS.isLink(node.mode)) {
                    attr.size = node.link.length;
                }
                else {
                    attr.size = 0;
                } attr.atime = new Date(node.timestamp); attr.mtime = new Date(node.timestamp); attr.ctime = new Date(node.timestamp); attr.blksize = 4096; attr.blocks = Math.ceil(attr.size / attr.blksize); return attr; }, setattr: function (node, attr) { if (attr.mode !== undefined) {
                    node.mode = attr.mode;
                } if (attr.timestamp !== undefined) {
                    node.timestamp = attr.timestamp;
                } if (attr.size !== undefined) {
                    MEMFS.resizeFileStorage(node, attr.size);
                } }, lookup: function (parent, name) { throw FS.genericErrors[44]; }, mknod: function (parent, name, mode, dev) { return MEMFS.createNode(parent, name, mode, dev); }, rename: function (old_node, new_dir, new_name) { if (FS.isDir(old_node.mode)) {
                    var new_node;
                    try {
                        new_node = FS.lookupNode(new_dir, new_name);
                    }
                    catch (e) { }
                    if (new_node) {
                        for (var i in new_node.contents) {
                            throw new FS.ErrnoError(55);
                        }
                    }
                } delete old_node.parent.contents[old_node.name]; old_node.parent.timestamp = Date.now(); old_node.name = new_name; new_dir.contents[new_name] = old_node; new_dir.timestamp = old_node.parent.timestamp; old_node.parent = new_dir; }, unlink: function (parent, name) { delete parent.contents[name]; parent.timestamp = Date.now(); }, rmdir: function (parent, name) { var node = FS.lookupNode(parent, name); for (var i in node.contents) {
                    throw new FS.ErrnoError(55);
                } delete parent.contents[name]; parent.timestamp = Date.now(); }, readdir: function (node) { var entries = [".", ".."]; for (var key in node.contents) {
                    if (!node.contents.hasOwnProperty(key)) {
                        continue;
                    }
                    entries.push(key);
                } return entries; }, symlink: function (parent, newname, oldpath) { var node = MEMFS.createNode(parent, newname, 511 | 40960, 0); node.link = oldpath; return node; }, readlink: function (node) { if (!FS.isLink(node.mode)) {
                    throw new FS.ErrnoError(28);
                } return node.link; } }, stream_ops: { read: function (stream, buffer, offset, length, position) { var contents = stream.node.contents; if (position >= stream.node.usedBytes)
                    return 0; var size = Math.min(stream.node.usedBytes - position, length); if (size > 8 && contents.subarray) {
                    buffer.set(contents.subarray(position, position + size), offset);
                }
                else {
                    for (var i = 0; i < size; i++)
                        buffer[offset + i] = contents[position + i];
                } return size; }, write: function (stream, buffer, offset, length, position, canOwn) { if (buffer.buffer === HEAP8.buffer) {
                    canOwn = false;
                } if (!length)
                    return 0; var node = stream.node; node.timestamp = Date.now(); if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                    if (canOwn) {
                        node.contents = buffer.subarray(offset, offset + length);
                        node.usedBytes = length;
                        return length;
                    }
                    else if (node.usedBytes === 0 && position === 0) {
                        node.contents = buffer.slice(offset, offset + length);
                        node.usedBytes = length;
                        return length;
                    }
                    else if (position + length <= node.usedBytes) {
                        node.contents.set(buffer.subarray(offset, offset + length), position);
                        return length;
                    }
                } MEMFS.expandFileStorage(node, position + length); if (node.contents.subarray && buffer.subarray) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                }
                else {
                    for (var i = 0; i < length; i++) {
                        node.contents[position + i] = buffer[offset + i];
                    }
                } node.usedBytes = Math.max(node.usedBytes, position + length); return length; }, llseek: function (stream, offset, whence) { var position = offset; if (whence === 1) {
                    position += stream.position;
                }
                else if (whence === 2) {
                    if (FS.isFile(stream.node.mode)) {
                        position += stream.node.usedBytes;
                    }
                } if (position < 0) {
                    throw new FS.ErrnoError(28);
                } return position; }, allocate: function (stream, offset, length) { MEMFS.expandFileStorage(stream.node, offset + length); stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length); }, mmap: function (stream, length, position, prot, flags) { if (!FS.isFile(stream.node.mode)) {
                    throw new FS.ErrnoError(43);
                } var ptr; var allocated; var contents = stream.node.contents; if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
                    allocated = false;
                    ptr = contents.byteOffset;
                }
                else {
                    if (position > 0 || position + length < contents.length) {
                        if (contents.subarray) {
                            contents = contents.subarray(position, position + length);
                        }
                        else {
                            contents = Array.prototype.slice.call(contents, position, position + length);
                        }
                    }
                    allocated = true;
                    ptr = mmapAlloc(length);
                    if (!ptr) {
                        throw new FS.ErrnoError(48);
                    }
                    HEAP8.set(contents, ptr);
                } return { ptr: ptr, allocated: allocated }; }, msync: function (stream, buffer, offset, length, mmapFlags) { MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false); return 0; } } };
        var asyncLoad = function (url, onload, onerror, noRunDep) { var dep = !noRunDep ? getUniqueRunDependency("al ".concat(url)) : ""; readAsync(url, (function (arrayBuffer) { assert(arrayBuffer, "Loading data file \"".concat(url, "\" failed (no arrayBuffer).")); onload(new Uint8Array(arrayBuffer)); if (dep)
            removeRunDependency(dep); }), (function (event) { if (onerror) {
            onerror();
        }
        else {
            throw "Loading data file \"".concat(url, "\" failed.");
        } })); if (dep)
            addRunDependency(dep); };
        var preloadPlugins = Module["preloadPlugins"] || [];
        function FS_handledByPreloadPlugin(byteArray, fullname, finish, onerror) { if (typeof Browser != "undefined")
            Browser.init(); var handled = false; preloadPlugins.forEach((function (plugin) { if (handled)
            return; if (plugin["canHandle"](fullname)) {
            plugin["handle"](byteArray, fullname, finish, onerror);
            handled = true;
        } })); return handled; }
        function FS_createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) { var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent; var dep = getUniqueRunDependency("cp ".concat(fullname)); function processData(byteArray) { function finish(byteArray) { if (preFinish)
            preFinish(); if (!dontCreateFile) {
            FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
        } if (onload)
            onload(); removeRunDependency(dep); } if (FS_handledByPreloadPlugin(byteArray, fullname, finish, (function () { if (onerror)
            onerror(); removeRunDependency(dep); }))) {
            return;
        } finish(byteArray); } addRunDependency(dep); if (typeof url == "string") {
            asyncLoad(url, (function (byteArray) { return processData(byteArray); }), onerror);
        }
        else {
            processData(url);
        } }
        function FS_modeStringToFlags(str) { var flagModes = { "r": 0, "r+": 2, "w": 512 | 64 | 1, "w+": 512 | 64 | 2, "a": 1024 | 64 | 1, "a+": 1024 | 64 | 2 }; var flags = flagModes[str]; if (typeof flags == "undefined") {
            throw new Error("Unknown file open mode: ".concat(str));
        } return flags; }
        function FS_getMode(canRead, canWrite) { var mode = 0; if (canRead)
            mode |= 292 | 73; if (canWrite)
            mode |= 146; return mode; }
        var FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: function (path, opts) {
                if (opts === void 0) { opts = {}; }
                path = PATH_FS.resolve(path);
                if (!path)
                    return { path: "", node: null };
                var defaults = { follow_mount: true, recurse_count: 0 };
                opts = Object.assign(defaults, opts);
                if (opts.recurse_count > 8) {
                    throw new FS.ErrnoError(32);
                }
                var parts = path.split("/").filter((function (p) { return !!p; }));
                var current = FS.root;
                var current_path = "/";
                for (var i = 0; i < parts.length; i++) {
                    var islast = i === parts.length - 1;
                    if (islast && opts.parent) {
                        break;
                    }
                    current = FS.lookupNode(current, parts[i]);
                    current_path = PATH.join2(current_path, parts[i]);
                    if (FS.isMountpoint(current)) {
                        if (!islast || islast && opts.follow_mount) {
                            current = current.mounted.root;
                        }
                    }
                    if (!islast || opts.follow) {
                        var count = 0;
                        while (FS.isLink(current.mode)) {
                            var link = FS.readlink(current_path);
                            current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                            var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
                            current = lookup.node;
                            if (count++ > 40) {
                                throw new FS.ErrnoError(32);
                            }
                        }
                    }
                }
                return { path: current_path, node: current };
            }, getPath: function (node) { var path; while (true) {
                if (FS.isRoot(node)) {
                    var mount = node.mount.mountpoint;
                    if (!path)
                        return mount;
                    return mount[mount.length - 1] !== "/" ? "".concat(mount, "/").concat(path) : mount + path;
                }
                path = path ? "".concat(node.name, "/").concat(path) : node.name;
                node = node.parent;
            } }, hashName: function (parentid, name) { var hash = 0; for (var i = 0; i < name.length; i++) {
                hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
            } return (parentid + hash >>> 0) % FS.nameTable.length; }, hashAddNode: function (node) { var hash = FS.hashName(node.parent.id, node.name); node.name_next = FS.nameTable[hash]; FS.nameTable[hash] = node; }, hashRemoveNode: function (node) { var hash = FS.hashName(node.parent.id, node.name); if (FS.nameTable[hash] === node) {
                FS.nameTable[hash] = node.name_next;
            }
            else {
                var current = FS.nameTable[hash];
                while (current) {
                    if (current.name_next === node) {
                        current.name_next = node.name_next;
                        break;
                    }
                    current = current.name_next;
                }
            } }, lookupNode: function (parent, name) { var errCode = FS.mayLookup(parent); if (errCode) {
                throw new FS.ErrnoError(errCode, parent);
            } var hash = FS.hashName(parent.id, name); for (var node = FS.nameTable[hash]; node; node = node.name_next) {
                var nodeName = node.name;
                if (node.parent.id === parent.id && nodeName === name) {
                    return node;
                }
            } return FS.lookup(parent, name); }, createNode: function (parent, name, mode, rdev) { var node = new FS.FSNode(parent, name, mode, rdev); FS.hashAddNode(node); return node; }, destroyNode: function (node) { FS.hashRemoveNode(node); }, isRoot: function (node) { return node === node.parent; }, isMountpoint: function (node) { return !!node.mounted; }, isFile: function (mode) { return (mode & 61440) === 32768; }, isDir: function (mode) { return (mode & 61440) === 16384; }, isLink: function (mode) { return (mode & 61440) === 40960; }, isChrdev: function (mode) { return (mode & 61440) === 8192; }, isBlkdev: function (mode) { return (mode & 61440) === 24576; }, isFIFO: function (mode) { return (mode & 61440) === 4096; }, isSocket: function (mode) { return (mode & 49152) === 49152; }, flagsToPermissionString: function (flag) { var perms = ["r", "w", "rw"][flag & 3]; if (flag & 512) {
                perms += "w";
            } return perms; }, nodePermissions: function (node, perms) { if (FS.ignorePermissions) {
                return 0;
            } if (perms.includes("r") && !(node.mode & 292)) {
                return 2;
            }
            else if (perms.includes("w") && !(node.mode & 146)) {
                return 2;
            }
            else if (perms.includes("x") && !(node.mode & 73)) {
                return 2;
            } return 0; }, mayLookup: function (dir) { var errCode = FS.nodePermissions(dir, "x"); if (errCode)
                return errCode; if (!dir.node_ops.lookup)
                return 2; return 0; }, mayCreate: function (dir, name) { try {
                var node = FS.lookupNode(dir, name);
                return 20;
            }
            catch (e) { } return FS.nodePermissions(dir, "wx"); }, mayDelete: function (dir, name, isdir) { var node; try {
                node = FS.lookupNode(dir, name);
            }
            catch (e) {
                return e.errno;
            } var errCode = FS.nodePermissions(dir, "wx"); if (errCode) {
                return errCode;
            } if (isdir) {
                if (!FS.isDir(node.mode)) {
                    return 54;
                }
                if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                    return 10;
                }
            }
            else {
                if (FS.isDir(node.mode)) {
                    return 31;
                }
            } return 0; }, mayOpen: function (node, flags) { if (!node) {
                return 44;
            } if (FS.isLink(node.mode)) {
                return 32;
            }
            else if (FS.isDir(node.mode)) {
                if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                    return 31;
                }
            } return FS.nodePermissions(node, FS.flagsToPermissionString(flags)); }, MAX_OPEN_FDS: 4096, nextfd: function () { for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
                if (!FS.streams[fd]) {
                    return fd;
                }
            } throw new FS.ErrnoError(33); }, getStreamChecked: function (fd) { var stream = FS.getStream(fd); if (!stream) {
                throw new FS.ErrnoError(8);
            } return stream; }, getStream: function (fd) { return FS.streams[fd]; }, createStream: function (stream, fd) {
                if (fd === void 0) { fd = -1; }
                if (!FS.FSStream) {
                    FS.FSStream = function () { this.shared = {}; };
                    FS.FSStream.prototype = {};
                    Object.defineProperties(FS.FSStream.prototype, { object: { get: function () { return this.node; }, set: function (val) { this.node = val; } }, isRead: { get: function () { return (this.flags & 2097155) !== 1; } }, isWrite: { get: function () { return (this.flags & 2097155) !== 0; } }, isAppend: { get: function () { return this.flags & 1024; } }, flags: { get: function () { return this.shared.flags; }, set: function (val) { this.shared.flags = val; } }, position: { get: function () { return this.shared.position; }, set: function (val) { this.shared.position = val; } } });
                }
                stream = Object.assign(new FS.FSStream, stream);
                if (fd == -1) {
                    fd = FS.nextfd();
                }
                stream.fd = fd;
                FS.streams[fd] = stream;
                return stream;
            }, closeStream: function (fd) { FS.streams[fd] = null; }, chrdev_stream_ops: { open: function (stream) { var device = FS.getDevice(stream.node.rdev); stream.stream_ops = device.stream_ops; if (stream.stream_ops.open) {
                    stream.stream_ops.open(stream);
                } }, llseek: function () { throw new FS.ErrnoError(70); } }, major: function (dev) { return dev >> 8; }, minor: function (dev) { return dev & 255; }, makedev: function (ma, mi) { return ma << 8 | mi; }, registerDevice: function (dev, ops) { FS.devices[dev] = { stream_ops: ops }; }, getDevice: function (dev) { return FS.devices[dev]; }, getMounts: function (mount) { var mounts = []; var check = [mount]; while (check.length) {
                var m = check.pop();
                mounts.push(m);
                check.push.apply(check, m.mounts);
            } return mounts; }, syncfs: function (populate, callback) { if (typeof populate == "function") {
                callback = populate;
                populate = false;
            } FS.syncFSRequests++; if (FS.syncFSRequests > 1) {
                err("warning: ".concat(FS.syncFSRequests, " FS.syncfs operations in flight at once, probably just doing extra work"));
            } var mounts = FS.getMounts(FS.root.mount); var completed = 0; function doCallback(errCode) { FS.syncFSRequests--; return callback(errCode); } function done(errCode) { if (errCode) {
                if (!done.errored) {
                    done.errored = true;
                    return doCallback(errCode);
                }
                return;
            } if (++completed >= mounts.length) {
                doCallback(null);
            } } mounts.forEach((function (mount) { if (!mount.type.syncfs) {
                return done(null);
            } mount.type.syncfs(mount, populate, done); })); }, mount: function (type, opts, mountpoint) { var root = mountpoint === "/"; var pseudo = !mountpoint; var node; if (root && FS.root) {
                throw new FS.ErrnoError(10);
            }
            else if (!root && !pseudo) {
                var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
                mountpoint = lookup.path;
                node = lookup.node;
                if (FS.isMountpoint(node)) {
                    throw new FS.ErrnoError(10);
                }
                if (!FS.isDir(node.mode)) {
                    throw new FS.ErrnoError(54);
                }
            } var mount = { type: type, opts: opts, mountpoint: mountpoint, mounts: [] }; var mountRoot = type.mount(mount); mountRoot.mount = mount; mount.root = mountRoot; if (root) {
                FS.root = mountRoot;
            }
            else if (node) {
                node.mounted = mount;
                if (node.mount) {
                    node.mount.mounts.push(mount);
                }
            } return mountRoot; }, unmount: function (mountpoint) { var lookup = FS.lookupPath(mountpoint, { follow_mount: false }); if (!FS.isMountpoint(lookup.node)) {
                throw new FS.ErrnoError(28);
            } var node = lookup.node; var mount = node.mounted; var mounts = FS.getMounts(mount); Object.keys(FS.nameTable).forEach((function (hash) { var current = FS.nameTable[hash]; while (current) {
                var next = current.name_next;
                if (mounts.includes(current.mount)) {
                    FS.destroyNode(current);
                }
                current = next;
            } })); node.mounted = null; var idx = node.mount.mounts.indexOf(mount); node.mount.mounts.splice(idx, 1); }, lookup: function (parent, name) { return parent.node_ops.lookup(parent, name); }, mknod: function (path, mode, dev) { var lookup = FS.lookupPath(path, { parent: true }); var parent = lookup.node; var name = PATH.basename(path); if (!name || name === "." || name === "..") {
                throw new FS.ErrnoError(28);
            } var errCode = FS.mayCreate(parent, name); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } if (!parent.node_ops.mknod) {
                throw new FS.ErrnoError(63);
            } return parent.node_ops.mknod(parent, name, mode, dev); }, create: function (path, mode) { mode = mode !== undefined ? mode : 438; mode &= 4095; mode |= 32768; return FS.mknod(path, mode, 0); }, mkdir: function (path, mode) { mode = mode !== undefined ? mode : 511; mode &= 511 | 512; mode |= 16384; return FS.mknod(path, mode, 0); }, mkdirTree: function (path, mode) { var dirs = path.split("/"); var d = ""; for (var i = 0; i < dirs.length; ++i) {
                if (!dirs[i])
                    continue;
                d += "/" + dirs[i];
                try {
                    FS.mkdir(d, mode);
                }
                catch (e) {
                    if (e.errno != 20)
                        throw e;
                }
            } }, mkdev: function (path, mode, dev) { if (typeof dev == "undefined") {
                dev = mode;
                mode = 438;
            } mode |= 8192; return FS.mknod(path, mode, dev); }, symlink: function (oldpath, newpath) { if (!PATH_FS.resolve(oldpath)) {
                throw new FS.ErrnoError(44);
            } var lookup = FS.lookupPath(newpath, { parent: true }); var parent = lookup.node; if (!parent) {
                throw new FS.ErrnoError(44);
            } var newname = PATH.basename(newpath); var errCode = FS.mayCreate(parent, newname); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } if (!parent.node_ops.symlink) {
                throw new FS.ErrnoError(63);
            } return parent.node_ops.symlink(parent, newname, oldpath); }, rename: function (old_path, new_path) { var old_dirname = PATH.dirname(old_path); var new_dirname = PATH.dirname(new_path); var old_name = PATH.basename(old_path); var new_name = PATH.basename(new_path); var lookup, old_dir, new_dir; lookup = FS.lookupPath(old_path, { parent: true }); old_dir = lookup.node; lookup = FS.lookupPath(new_path, { parent: true }); new_dir = lookup.node; if (!old_dir || !new_dir)
                throw new FS.ErrnoError(44); if (old_dir.mount !== new_dir.mount) {
                throw new FS.ErrnoError(75);
            } var old_node = FS.lookupNode(old_dir, old_name); var relative = PATH_FS.relative(old_path, new_dirname); if (relative.charAt(0) !== ".") {
                throw new FS.ErrnoError(28);
            } relative = PATH_FS.relative(new_path, old_dirname); if (relative.charAt(0) !== ".") {
                throw new FS.ErrnoError(55);
            } var new_node; try {
                new_node = FS.lookupNode(new_dir, new_name);
            }
            catch (e) { } if (old_node === new_node) {
                return;
            } var isdir = FS.isDir(old_node.mode); var errCode = FS.mayDelete(old_dir, old_name, isdir); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } if (!old_dir.node_ops.rename) {
                throw new FS.ErrnoError(63);
            } if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
                throw new FS.ErrnoError(10);
            } if (new_dir !== old_dir) {
                errCode = FS.nodePermissions(old_dir, "w");
                if (errCode) {
                    throw new FS.ErrnoError(errCode);
                }
            } FS.hashRemoveNode(old_node); try {
                old_dir.node_ops.rename(old_node, new_dir, new_name);
            }
            catch (e) {
                throw e;
            }
            finally {
                FS.hashAddNode(old_node);
            } }, rmdir: function (path) { var lookup = FS.lookupPath(path, { parent: true }); var parent = lookup.node; var name = PATH.basename(path); var node = FS.lookupNode(parent, name); var errCode = FS.mayDelete(parent, name, true); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } if (!parent.node_ops.rmdir) {
                throw new FS.ErrnoError(63);
            } if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
            } parent.node_ops.rmdir(parent, name); FS.destroyNode(node); }, readdir: function (path) { var lookup = FS.lookupPath(path, { follow: true }); var node = lookup.node; if (!node.node_ops.readdir) {
                throw new FS.ErrnoError(54);
            } return node.node_ops.readdir(node); }, unlink: function (path) { var lookup = FS.lookupPath(path, { parent: true }); var parent = lookup.node; if (!parent) {
                throw new FS.ErrnoError(44);
            } var name = PATH.basename(path); var node = FS.lookupNode(parent, name); var errCode = FS.mayDelete(parent, name, false); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } if (!parent.node_ops.unlink) {
                throw new FS.ErrnoError(63);
            } if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
            } parent.node_ops.unlink(parent, name); FS.destroyNode(node); }, readlink: function (path) { var lookup = FS.lookupPath(path); var link = lookup.node; if (!link) {
                throw new FS.ErrnoError(44);
            } if (!link.node_ops.readlink) {
                throw new FS.ErrnoError(28);
            } return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link)); }, stat: function (path, dontFollow) { var lookup = FS.lookupPath(path, { follow: !dontFollow }); var node = lookup.node; if (!node) {
                throw new FS.ErrnoError(44);
            } if (!node.node_ops.getattr) {
                throw new FS.ErrnoError(63);
            } return node.node_ops.getattr(node); }, lstat: function (path) { return FS.stat(path, true); }, chmod: function (path, mode, dontFollow) { var node; if (typeof path == "string") {
                var lookup = FS.lookupPath(path, { follow: !dontFollow });
                node = lookup.node;
            }
            else {
                node = path;
            } if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
            } node.node_ops.setattr(node, { mode: mode & 4095 | node.mode & ~4095, timestamp: Date.now() }); }, lchmod: function (path, mode) { FS.chmod(path, mode, true); }, fchmod: function (fd, mode) { var stream = FS.getStreamChecked(fd); FS.chmod(stream.node, mode); }, chown: function (path, uid, gid, dontFollow) { var node; if (typeof path == "string") {
                var lookup = FS.lookupPath(path, { follow: !dontFollow });
                node = lookup.node;
            }
            else {
                node = path;
            } if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
            } node.node_ops.setattr(node, { timestamp: Date.now() }); }, lchown: function (path, uid, gid) { FS.chown(path, uid, gid, true); }, fchown: function (fd, uid, gid) { var stream = FS.getStreamChecked(fd); FS.chown(stream.node, uid, gid); }, truncate: function (path, len) { if (len < 0) {
                throw new FS.ErrnoError(28);
            } var node; if (typeof path == "string") {
                var lookup = FS.lookupPath(path, { follow: true });
                node = lookup.node;
            }
            else {
                node = path;
            } if (!node.node_ops.setattr) {
                throw new FS.ErrnoError(63);
            } if (FS.isDir(node.mode)) {
                throw new FS.ErrnoError(31);
            } if (!FS.isFile(node.mode)) {
                throw new FS.ErrnoError(28);
            } var errCode = FS.nodePermissions(node, "w"); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } node.node_ops.setattr(node, { size: len, timestamp: Date.now() }); }, ftruncate: function (fd, len) { var stream = FS.getStreamChecked(fd); if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(28);
            } FS.truncate(stream.node, len); }, utime: function (path, atime, mtime) { var lookup = FS.lookupPath(path, { follow: true }); var node = lookup.node; node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) }); }, open: function (path, flags, mode) { if (path === "") {
                throw new FS.ErrnoError(44);
            } flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags; mode = typeof mode == "undefined" ? 438 : mode; if (flags & 64) {
                mode = mode & 4095 | 32768;
            }
            else {
                mode = 0;
            } var node; if (typeof path == "object") {
                node = path;
            }
            else {
                path = PATH.normalize(path);
                try {
                    var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
                    node = lookup.node;
                }
                catch (e) { }
            } var created = false; if (flags & 64) {
                if (node) {
                    if (flags & 128) {
                        throw new FS.ErrnoError(20);
                    }
                }
                else {
                    node = FS.mknod(path, mode, 0);
                    created = true;
                }
            } if (!node) {
                throw new FS.ErrnoError(44);
            } if (FS.isChrdev(node.mode)) {
                flags &= ~512;
            } if (flags & 65536 && !FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54);
            } if (!created) {
                var errCode = FS.mayOpen(node, flags);
                if (errCode) {
                    throw new FS.ErrnoError(errCode);
                }
            } if (flags & 512 && !created) {
                FS.truncate(node, 0);
            } flags &= ~(128 | 512 | 131072); var stream = FS.createStream({ node: node, path: FS.getPath(node), flags: flags, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false }); if (stream.stream_ops.open) {
                stream.stream_ops.open(stream);
            } if (Module["logReadFiles"] && !(flags & 1)) {
                if (!FS.readFiles)
                    FS.readFiles = {};
                if (!(path in FS.readFiles)) {
                    FS.readFiles[path] = 1;
                }
            } return stream; }, close: function (stream) { if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
            } if (stream.getdents)
                stream.getdents = null; try {
                if (stream.stream_ops.close) {
                    stream.stream_ops.close(stream);
                }
            }
            catch (e) {
                throw e;
            }
            finally {
                FS.closeStream(stream.fd);
            } stream.fd = null; }, isClosed: function (stream) { return stream.fd === null; }, llseek: function (stream, offset, whence) { if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
            } if (!stream.seekable || !stream.stream_ops.llseek) {
                throw new FS.ErrnoError(70);
            } if (whence != 0 && whence != 1 && whence != 2) {
                throw new FS.ErrnoError(28);
            } stream.position = stream.stream_ops.llseek(stream, offset, whence); stream.ungotten = []; return stream.position; }, read: function (stream, buffer, offset, length, position) { if (length < 0 || position < 0) {
                throw new FS.ErrnoError(28);
            } if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
            } if ((stream.flags & 2097155) === 1) {
                throw new FS.ErrnoError(8);
            } if (FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(31);
            } if (!stream.stream_ops.read) {
                throw new FS.ErrnoError(28);
            } var seeking = typeof position != "undefined"; if (!seeking) {
                position = stream.position;
            }
            else if (!stream.seekable) {
                throw new FS.ErrnoError(70);
            } var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position); if (!seeking)
                stream.position += bytesRead; return bytesRead; }, write: function (stream, buffer, offset, length, position, canOwn) { if (length < 0 || position < 0) {
                throw new FS.ErrnoError(28);
            } if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
            } if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(8);
            } if (FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(31);
            } if (!stream.stream_ops.write) {
                throw new FS.ErrnoError(28);
            } if (stream.seekable && stream.flags & 1024) {
                FS.llseek(stream, 0, 2);
            } var seeking = typeof position != "undefined"; if (!seeking) {
                position = stream.position;
            }
            else if (!stream.seekable) {
                throw new FS.ErrnoError(70);
            } var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn); if (!seeking)
                stream.position += bytesWritten; return bytesWritten; }, allocate: function (stream, offset, length) { if (FS.isClosed(stream)) {
                throw new FS.ErrnoError(8);
            } if (offset < 0 || length <= 0) {
                throw new FS.ErrnoError(28);
            } if ((stream.flags & 2097155) === 0) {
                throw new FS.ErrnoError(8);
            } if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
                throw new FS.ErrnoError(43);
            } if (!stream.stream_ops.allocate) {
                throw new FS.ErrnoError(138);
            } stream.stream_ops.allocate(stream, offset, length); }, mmap: function (stream, length, position, prot, flags) { if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
                throw new FS.ErrnoError(2);
            } if ((stream.flags & 2097155) === 1) {
                throw new FS.ErrnoError(2);
            } if (!stream.stream_ops.mmap) {
                throw new FS.ErrnoError(43);
            } return stream.stream_ops.mmap(stream, length, position, prot, flags); }, msync: function (stream, buffer, offset, length, mmapFlags) { if (!stream.stream_ops.msync) {
                return 0;
            } return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags); }, munmap: function (stream) { return 0; }, ioctl: function (stream, cmd, arg) { if (!stream.stream_ops.ioctl) {
                throw new FS.ErrnoError(59);
            } return stream.stream_ops.ioctl(stream, cmd, arg); }, readFile: function (path, opts) {
                if (opts === void 0) { opts = {}; }
                opts.flags = opts.flags || 0;
                opts.encoding = opts.encoding || "binary";
                if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
                    throw new Error("Invalid encoding type \"".concat(opts.encoding, "\""));
                }
                var ret;
                var stream = FS.open(path, opts.flags);
                var stat = FS.stat(path);
                var length = stat.size;
                var buf = new Uint8Array(length);
                FS.read(stream, buf, 0, length, 0);
                if (opts.encoding === "utf8") {
                    ret = UTF8ArrayToString(buf, 0);
                }
                else if (opts.encoding === "binary") {
                    ret = buf;
                }
                FS.close(stream);
                return ret;
            }, writeFile: function (path, data, opts) {
                if (opts === void 0) { opts = {}; }
                opts.flags = opts.flags || 577;
                var stream = FS.open(path, opts.flags, opts.mode);
                if (typeof data == "string") {
                    var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
                    var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
                    FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
                }
                else if (ArrayBuffer.isView(data)) {
                    FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
                }
                else {
                    throw new Error("Unsupported data type");
                }
                FS.close(stream);
            }, cwd: function () { return FS.currentPath; }, chdir: function (path) { var lookup = FS.lookupPath(path, { follow: true }); if (lookup.node === null) {
                throw new FS.ErrnoError(44);
            } if (!FS.isDir(lookup.node.mode)) {
                throw new FS.ErrnoError(54);
            } var errCode = FS.nodePermissions(lookup.node, "x"); if (errCode) {
                throw new FS.ErrnoError(errCode);
            } FS.currentPath = lookup.path; }, createDefaultDirectories: function () { FS.mkdir("/tmp"); FS.mkdir("/home"); FS.mkdir("/home/web_user"); }, createDefaultDevices: function () { FS.mkdir("/dev"); FS.registerDevice(FS.makedev(1, 3), { read: function () { return 0; }, write: function (stream, buffer, offset, length, pos) { return length; } }); FS.mkdev("/dev/null", FS.makedev(1, 3)); TTY.register(FS.makedev(5, 0), TTY.default_tty_ops); TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops); FS.mkdev("/dev/tty", FS.makedev(5, 0)); FS.mkdev("/dev/tty1", FS.makedev(6, 0)); var randomBuffer = new Uint8Array(1024), randomLeft = 0; var randomByte = function () { if (randomLeft === 0) {
                randomLeft = randomFill(randomBuffer).byteLength;
            } return randomBuffer[--randomLeft]; }; FS.createDevice("/dev", "random", randomByte); FS.createDevice("/dev", "urandom", randomByte); FS.mkdir("/dev/shm"); FS.mkdir("/dev/shm/tmp"); }, createSpecialDirectories: function () { FS.mkdir("/proc"); var proc_self = FS.mkdir("/proc/self"); FS.mkdir("/proc/self/fd"); FS.mount({ mount: function () { var node = FS.createNode(proc_self, "fd", 16384 | 511, 73); node.node_ops = { lookup: function (parent, name) { var fd = +name; var stream = FS.getStreamChecked(fd); var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: function () { return stream.path; } } }; ret.parent = ret; return ret; } }; return node; } }, {}, "/proc/self/fd"); }, createStandardStreams: function () { if (Module["stdin"]) {
                FS.createDevice("/dev", "stdin", Module["stdin"]);
            }
            else {
                FS.symlink("/dev/tty", "/dev/stdin");
            } if (Module["stdout"]) {
                FS.createDevice("/dev", "stdout", null, Module["stdout"]);
            }
            else {
                FS.symlink("/dev/tty", "/dev/stdout");
            } if (Module["stderr"]) {
                FS.createDevice("/dev", "stderr", null, Module["stderr"]);
            }
            else {
                FS.symlink("/dev/tty1", "/dev/stderr");
            } var stdin = FS.open("/dev/stdin", 0); var stdout = FS.open("/dev/stdout", 1); var stderr = FS.open("/dev/stderr", 1); }, ensureErrnoError: function () { if (FS.ErrnoError)
                return; FS.ErrnoError = function ErrnoError(errno, node) { this.name = "ErrnoError"; this.node = node; this.setErrno = function (errno) { this.errno = errno; }; this.setErrno(errno); this.message = "FS error"; }; FS.ErrnoError.prototype = new Error; FS.ErrnoError.prototype.constructor = FS.ErrnoError; [44].forEach((function (code) { FS.genericErrors[code] = new FS.ErrnoError(code); FS.genericErrors[code].stack = "<generic error, no stack>"; })); }, staticInit: function () { FS.ensureErrnoError(); FS.nameTable = new Array(4096); FS.mount(MEMFS, {}, "/"); FS.createDefaultDirectories(); FS.createDefaultDevices(); FS.createSpecialDirectories(); FS.filesystems = { "MEMFS": MEMFS }; }, init: function (input, output, error) { FS.init.initialized = true; FS.ensureErrnoError(); Module["stdin"] = input || Module["stdin"]; Module["stdout"] = output || Module["stdout"]; Module["stderr"] = error || Module["stderr"]; FS.createStandardStreams(); }, quit: function () { FS.init.initialized = false; for (var i = 0; i < FS.streams.length; i++) {
                var stream = FS.streams[i];
                if (!stream) {
                    continue;
                }
                FS.close(stream);
            } }, findObject: function (path, dontResolveLastLink) { var ret = FS.analyzePath(path, dontResolveLastLink); if (!ret.exists) {
                return null;
            } return ret.object; }, analyzePath: function (path, dontResolveLastLink) { try {
                var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
                path = lookup.path;
            }
            catch (e) { } var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null }; try {
                var lookup = FS.lookupPath(path, { parent: true });
                ret.parentExists = true;
                ret.parentPath = lookup.path;
                ret.parentObject = lookup.node;
                ret.name = PATH.basename(path);
                lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
                ret.exists = true;
                ret.path = lookup.path;
                ret.object = lookup.node;
                ret.name = lookup.node.name;
                ret.isRoot = lookup.path === "/";
            }
            catch (e) {
                ret.error = e.errno;
            } return ret; }, createPath: function (parent, path, canRead, canWrite) { parent = typeof parent == "string" ? parent : FS.getPath(parent); var parts = path.split("/").reverse(); while (parts.length) {
                var part = parts.pop();
                if (!part)
                    continue;
                var current = PATH.join2(parent, part);
                try {
                    FS.mkdir(current);
                }
                catch (e) { }
                parent = current;
            } return current; }, createFile: function (parent, name, properties, canRead, canWrite) { var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name); var mode = FS_getMode(canRead, canWrite); return FS.create(path, mode); }, createDataFile: function (parent, name, data, canRead, canWrite, canOwn) { var path = name; if (parent) {
                parent = typeof parent == "string" ? parent : FS.getPath(parent);
                path = name ? PATH.join2(parent, name) : parent;
            } var mode = FS_getMode(canRead, canWrite); var node = FS.create(path, mode); if (data) {
                if (typeof data == "string") {
                    var arr = new Array(data.length);
                    for (var i = 0, len = data.length; i < len; ++i)
                        arr[i] = data.charCodeAt(i);
                    data = arr;
                }
                FS.chmod(node, mode | 146);
                var stream = FS.open(node, 577);
                FS.write(stream, data, 0, data.length, 0, canOwn);
                FS.close(stream);
                FS.chmod(node, mode);
            } return node; }, createDevice: function (parent, name, input, output) { var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name); var mode = FS_getMode(!!input, !!output); if (!FS.createDevice.major)
                FS.createDevice.major = 64; var dev = FS.makedev(FS.createDevice.major++, 0); FS.registerDevice(dev, { open: function (stream) { stream.seekable = false; }, close: function (stream) { if (output && output.buffer && output.buffer.length) {
                    output(10);
                } }, read: function (stream, buffer, offset, length, pos) { var bytesRead = 0; for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = input();
                    }
                    catch (e) {
                        throw new FS.ErrnoError(29);
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(6);
                    }
                    if (result === null || result === undefined)
                        break;
                    bytesRead++;
                    buffer[offset + i] = result;
                } if (bytesRead) {
                    stream.node.timestamp = Date.now();
                } return bytesRead; }, write: function (stream, buffer, offset, length, pos) { for (var i = 0; i < length; i++) {
                    try {
                        output(buffer[offset + i]);
                    }
                    catch (e) {
                        throw new FS.ErrnoError(29);
                    }
                } if (length) {
                    stream.node.timestamp = Date.now();
                } return i; } }); return FS.mkdev(path, mode, dev); }, forceLoadFile: function (obj) { if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
                return true; if (typeof XMLHttpRequest != "undefined") {
                throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
            }
            else if (read_) {
                try {
                    obj.contents = intArrayFromString(read_(obj.url), true);
                    obj.usedBytes = obj.contents.length;
                }
                catch (e) {
                    throw new FS.ErrnoError(29);
                }
            }
            else {
                throw new Error("Cannot load without read() or XMLHttpRequest.");
            } }, createLazyFile: function (parent, name, url, canRead, canWrite) { function LazyUint8Array() { this.lengthKnown = false; this.chunks = []; } LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) { if (idx > this.length - 1 || idx < 0) {
                return undefined;
            } var chunkOffset = idx % this.chunkSize; var chunkNum = idx / this.chunkSize | 0; return this.getter(chunkNum)[chunkOffset]; }; LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) { this.getter = getter; }; LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() { var xhr = new XMLHttpRequest; xhr.open("HEAD", url, false); xhr.send(null); if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                throw new Error("Couldn't load " + url + ". Status: " + xhr.status); var datalength = Number(xhr.getResponseHeader("Content-length")); var header; var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes"; var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip"; var chunkSize = 1024 * 1024; if (!hasByteServing)
                chunkSize = datalength; var doXHR = function (from, to) { if (from > to)
                throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!"); if (to > datalength - 1)
                throw new Error("only " + datalength + " bytes available! programmer error!"); var xhr = new XMLHttpRequest; xhr.open("GET", url, false); if (datalength !== chunkSize)
                xhr.setRequestHeader("Range", "bytes=" + from + "-" + to); xhr.responseType = "arraybuffer"; if (xhr.overrideMimeType) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            } xhr.send(null); if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                throw new Error("Couldn't load " + url + ". Status: " + xhr.status); if (xhr.response !== undefined) {
                return new Uint8Array(xhr.response || []);
            } return intArrayFromString(xhr.responseText || "", true); }; var lazyArray = this; lazyArray.setDataGetter((function (chunkNum) { var start = chunkNum * chunkSize; var end = (chunkNum + 1) * chunkSize - 1; end = Math.min(end, datalength - 1); if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
            } if (typeof lazyArray.chunks[chunkNum] == "undefined")
                throw new Error("doXHR failed!"); return lazyArray.chunks[chunkNum]; })); if (usesGzip || !datalength) {
                chunkSize = datalength = 1;
                datalength = this.getter(0).length;
                chunkSize = datalength;
                out("LazyFiles on gzip forces download of the whole file when length is accessed");
            } this._length = datalength; this._chunkSize = chunkSize; this.lengthKnown = true; }; if (typeof XMLHttpRequest != "undefined") {
                if (!ENVIRONMENT_IS_WORKER)
                    throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                var lazyArray = new LazyUint8Array;
                Object.defineProperties(lazyArray, { length: { get: function () { if (!this.lengthKnown) {
                            this.cacheLength();
                        } return this._length; } }, chunkSize: { get: function () { if (!this.lengthKnown) {
                            this.cacheLength();
                        } return this._chunkSize; } } });
                var properties = { isDevice: false, contents: lazyArray };
            }
            else {
                var properties = { isDevice: false, url: url };
            } var node = FS.createFile(parent, name, properties, canRead, canWrite); if (properties.contents) {
                node.contents = properties.contents;
            }
            else if (properties.url) {
                node.contents = null;
                node.url = properties.url;
            } Object.defineProperties(node, { usedBytes: { get: function () { return this.contents.length; } } }); var stream_ops = {}; var keys = Object.keys(node.stream_ops); keys.forEach((function (key) { var fn = node.stream_ops[key]; stream_ops[key] = function forceLoadLazyFile() { FS.forceLoadFile(node); return fn.apply(null, arguments); }; })); function writeChunks(stream, buffer, offset, length, position) { var contents = stream.node.contents; if (position >= contents.length)
                return 0; var size = Math.min(contents.length - position, length); if (contents.slice) {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i];
                }
            }
            else {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents.get(position + i);
                }
            } return size; } stream_ops.read = function (stream, buffer, offset, length, position) { FS.forceLoadFile(node); return writeChunks(stream, buffer, offset, length, position); }; stream_ops.mmap = function (stream, length, position, prot, flags) { FS.forceLoadFile(node); var ptr = mmapAlloc(length); if (!ptr) {
                throw new FS.ErrnoError(48);
            } writeChunks(stream, HEAP8, ptr, length, position); return { ptr: ptr, allocated: true }; }; node.stream_ops = stream_ops; return node; } };
        var UTF8ToString = function (ptr, maxBytesToRead) { return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""; };
        var SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt: function (dirfd, path, allowEmpty) { if (PATH.isAbs(path)) {
                return path;
            } var dir; if (dirfd === -100) {
                dir = FS.cwd();
            }
            else {
                var dirstream = SYSCALLS.getStreamFromFD(dirfd);
                dir = dirstream.path;
            } if (path.length == 0) {
                if (!allowEmpty) {
                    throw new FS.ErrnoError(44);
                }
                return dir;
            } return PATH.join2(dir, path); }, doStat: function (func, path, buf) { try {
                var stat = func(path);
            }
            catch (e) {
                if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                    return -54;
                }
                throw e;
            } HEAP32[buf >> 2] = stat.dev; HEAP32[buf + 4 >> 2] = stat.mode; HEAPU32[buf + 8 >> 2] = stat.nlink; HEAP32[buf + 12 >> 2] = stat.uid; HEAP32[buf + 16 >> 2] = stat.gid; HEAP32[buf + 20 >> 2] = stat.rdev; tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1]; HEAP32[buf + 32 >> 2] = 4096; HEAP32[buf + 36 >> 2] = stat.blocks; var atime = stat.atime.getTime(); var mtime = stat.mtime.getTime(); var ctime = stat.ctime.getTime(); tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1]; HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3; tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1]; HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3; tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1]; HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3; tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1]; return 0; }, doMsync: function (addr, stream, len, flags, offset) { if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43);
            } if (flags & 2) {
                return 0;
            } var buffer = HEAPU8.slice(addr, addr + len); FS.msync(stream, buffer, offset, len, flags); }, varargs: undefined, get: function () { SYSCALLS.varargs += 4; var ret = HEAP32[SYSCALLS.varargs - 4 >> 2]; return ret; }, getStr: function (ptr) { var ret = UTF8ToString(ptr); return ret; }, getStreamFromFD: function (fd) { var stream = FS.getStreamChecked(fd); return stream; } };
        function ___syscall_dup(fd) { try {
            var old = SYSCALLS.getStreamFromFD(fd);
            return FS.createStream(old).fd;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        var setErrNo = function (value) { HEAP32[___errno_location() >> 2] = value; return value; };
        function ___syscall_fcntl64(fd, cmd, varargs) { SYSCALLS.varargs = varargs; try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (cmd) {
                case 0: {
                    var arg = SYSCALLS.get();
                    if (arg < 0) {
                        return -28;
                    }
                    var newStream;
                    newStream = FS.createStream(stream, arg);
                    return newStream.fd;
                }
                case 1:
                case 2: return 0;
                case 3: return stream.flags;
                case 4: {
                    var arg = SYSCALLS.get();
                    stream.flags |= arg;
                    return 0;
                }
                case 5: {
                    var arg = SYSCALLS.get();
                    var offset = 0;
                    HEAP16[arg + offset >> 1] = 2;
                    return 0;
                }
                case 6:
                case 7: return 0;
                case 16:
                case 8: return -28;
                case 9:
                    setErrNo(28);
                    return -1;
                default: {
                    return -28;
                }
            }
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        function ___syscall_fstat64(fd, buf) { try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            return SYSCALLS.doStat(FS.stat, stream.path, buf);
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        function ___syscall_lstat64(path, buf) { try {
            path = SYSCALLS.getStr(path);
            return SYSCALLS.doStat(FS.lstat, path, buf);
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        function ___syscall_newfstatat(dirfd, path, buf, flags) { try {
            path = SYSCALLS.getStr(path);
            var nofollow = flags & 256;
            var allowEmpty = flags & 4096;
            flags = flags & ~6400;
            path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
            return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        function ___syscall_openat(dirfd, path, flags, varargs) { SYSCALLS.varargs = varargs; try {
            path = SYSCALLS.getStr(path);
            path = SYSCALLS.calculateAt(dirfd, path);
            var mode = varargs ? SYSCALLS.get() : 0;
            return FS.open(path, flags, mode).fd;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        var PIPEFS = { BUCKET_BUFFER_SIZE: 8192, mount: function (mount) { return FS.createNode(null, "/", 16384 | 511, 0); }, createPipe: function () { var pipe = { buckets: [], refcnt: 2 }; pipe.buckets.push({ buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 }); var rName = PIPEFS.nextname(); var wName = PIPEFS.nextname(); var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0); var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0); rNode.pipe = pipe; wNode.pipe = pipe; var readableStream = FS.createStream({ path: rName, node: rNode, flags: 0, seekable: false, stream_ops: PIPEFS.stream_ops }); rNode.stream = readableStream; var writableStream = FS.createStream({ path: wName, node: wNode, flags: 1, seekable: false, stream_ops: PIPEFS.stream_ops }); wNode.stream = writableStream; return { readable_fd: readableStream.fd, writable_fd: writableStream.fd }; }, stream_ops: { poll: function (stream) { var pipe = stream.node.pipe; if ((stream.flags & 2097155) === 1) {
                    return 256 | 4;
                } if (pipe.buckets.length > 0) {
                    for (var i = 0; i < pipe.buckets.length; i++) {
                        var bucket = pipe.buckets[i];
                        if (bucket.offset - bucket.roffset > 0) {
                            return 64 | 1;
                        }
                    }
                } return 0; }, ioctl: function (stream, request, varargs) { return 28; }, fsync: function (stream) { return 28; }, read: function (stream, buffer, offset, length, position) { var pipe = stream.node.pipe; var currentLength = 0; for (var i = 0; i < pipe.buckets.length; i++) {
                    var bucket = pipe.buckets[i];
                    currentLength += bucket.offset - bucket.roffset;
                } assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer)); var data = buffer.subarray(offset, offset + length); if (length <= 0) {
                    return 0;
                } if (currentLength == 0) {
                    throw new FS.ErrnoError(6);
                } var toRead = Math.min(currentLength, length); var totalRead = toRead; var toRemove = 0; for (var i = 0; i < pipe.buckets.length; i++) {
                    var currBucket = pipe.buckets[i];
                    var bucketSize = currBucket.offset - currBucket.roffset;
                    if (toRead <= bucketSize) {
                        var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
                        if (toRead < bucketSize) {
                            tmpSlice = tmpSlice.subarray(0, toRead);
                            currBucket.roffset += toRead;
                        }
                        else {
                            toRemove++;
                        }
                        data.set(tmpSlice);
                        break;
                    }
                    else {
                        var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
                        data.set(tmpSlice);
                        data = data.subarray(tmpSlice.byteLength);
                        toRead -= tmpSlice.byteLength;
                        toRemove++;
                    }
                } if (toRemove && toRemove == pipe.buckets.length) {
                    toRemove--;
                    pipe.buckets[toRemove].offset = 0;
                    pipe.buckets[toRemove].roffset = 0;
                } pipe.buckets.splice(0, toRemove); return totalRead; }, write: function (stream, buffer, offset, length, position) { var pipe = stream.node.pipe; assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer)); var data = buffer.subarray(offset, offset + length); var dataLen = data.byteLength; if (dataLen <= 0) {
                    return 0;
                } var currBucket = null; if (pipe.buckets.length == 0) {
                    currBucket = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 };
                    pipe.buckets.push(currBucket);
                }
                else {
                    currBucket = pipe.buckets[pipe.buckets.length - 1];
                } assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE); var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset; if (freeBytesInCurrBuffer >= dataLen) {
                    currBucket.buffer.set(data, currBucket.offset);
                    currBucket.offset += dataLen;
                    return dataLen;
                }
                else if (freeBytesInCurrBuffer > 0) {
                    currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
                    currBucket.offset += freeBytesInCurrBuffer;
                    data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
                } var numBuckets = data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0; var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE; for (var i = 0; i < numBuckets; i++) {
                    var newBucket = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: PIPEFS.BUCKET_BUFFER_SIZE, roffset: 0 };
                    pipe.buckets.push(newBucket);
                    newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
                    data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
                } if (remElements > 0) {
                    var newBucket = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: data.byteLength, roffset: 0 };
                    pipe.buckets.push(newBucket);
                    newBucket.buffer.set(data);
                } return dataLen; }, close: function (stream) { var pipe = stream.node.pipe; pipe.refcnt--; if (pipe.refcnt === 0) {
                    pipe.buckets = null;
                } } }, nextname: function () { if (!PIPEFS.nextname.current) {
                PIPEFS.nextname.current = 0;
            } return "pipe[" + PIPEFS.nextname.current++ + "]"; } };
        function ___syscall_pipe(fdPtr) { try {
            if (fdPtr == 0) {
                throw new FS.ErrnoError(21);
            }
            var res = PIPEFS.createPipe();
            HEAP32[fdPtr >> 2] = res.readable_fd;
            HEAP32[fdPtr + 4 >> 2] = res.writable_fd;
            return 0;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        function ___syscall_poll(fds, nfds, timeout) { try {
            var nonzero = 0;
            for (var i = 0; i < nfds; i++) {
                var pollfd = fds + 8 * i;
                var fd = HEAP32[pollfd >> 2];
                var events = HEAP16[pollfd + 4 >> 1];
                var mask = 32;
                var stream = FS.getStream(fd);
                if (stream) {
                    mask = SYSCALLS.DEFAULT_POLLMASK;
                    if (stream.stream_ops.poll) {
                        mask = stream.stream_ops.poll(stream, -1);
                    }
                }
                mask &= events | 8 | 16;
                if (mask)
                    nonzero++;
                HEAP16[pollfd + 6 >> 1] = mask;
            }
            return nonzero;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        function ___syscall_stat64(path, buf) { try {
            path = SYSCALLS.getStr(path);
            return SYSCALLS.doStat(FS.stat, path, buf);
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return -e.errno;
        } }
        var isLeapYear = function (year) { return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); };
        var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        var ydayFromDate = function (date) { var leap = isLeapYear(date.getFullYear()); var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE; var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; return yday; };
        function convertI32PairToI53Checked(lo, hi) { return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN; }
        function __localtime_js(time_low, time_high, tmPtr) { var time = convertI32PairToI53Checked(time_low, time_high); var date = new Date(time * 1e3); HEAP32[tmPtr >> 2] = date.getSeconds(); HEAP32[tmPtr + 4 >> 2] = date.getMinutes(); HEAP32[tmPtr + 8 >> 2] = date.getHours(); HEAP32[tmPtr + 12 >> 2] = date.getDate(); HEAP32[tmPtr + 16 >> 2] = date.getMonth(); HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900; HEAP32[tmPtr + 24 >> 2] = date.getDay(); var yday = ydayFromDate(date) | 0; HEAP32[tmPtr + 28 >> 2] = yday; HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60); var start = new Date(date.getFullYear(), 0, 1); var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset(); var winterOffset = start.getTimezoneOffset(); var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0; HEAP32[tmPtr + 32 >> 2] = dst; }
        var __mktime_js = function (tmPtr) { var ret = (function () { var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0); var dst = HEAP32[tmPtr + 32 >> 2]; var guessedOffset = date.getTimezoneOffset(); var start = new Date(date.getFullYear(), 0, 1); var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset(); var winterOffset = start.getTimezoneOffset(); var dstOffset = Math.min(winterOffset, summerOffset); if (dst < 0) {
            HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
        }
        else if (dst > 0 != (dstOffset == guessedOffset)) {
            var nonDstOffset = Math.max(winterOffset, summerOffset);
            var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
            date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
        } HEAP32[tmPtr + 24 >> 2] = date.getDay(); var yday = ydayFromDate(date) | 0; HEAP32[tmPtr + 28 >> 2] = yday; HEAP32[tmPtr >> 2] = date.getSeconds(); HEAP32[tmPtr + 4 >> 2] = date.getMinutes(); HEAP32[tmPtr + 8 >> 2] = date.getHours(); HEAP32[tmPtr + 12 >> 2] = date.getDate(); HEAP32[tmPtr + 16 >> 2] = date.getMonth(); HEAP32[tmPtr + 20 >> 2] = date.getYear(); return date.getTime() / 1e3; })(); return setTempRet0((tempDouble = ret, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), ret >>> 0; };
        var __timegm_js = function (tmPtr) { var ret = (function () { var time = Date.UTC(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0); var date = new Date(time); HEAP32[tmPtr + 24 >> 2] = date.getUTCDay(); var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0); var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0; HEAP32[tmPtr + 28 >> 2] = yday; return date.getTime() / 1e3; })(); return setTempRet0((tempDouble = ret, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), ret >>> 0; };
        var stringToUTF8 = function (str, outPtr, maxBytesToWrite) { return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite); };
        var stringToNewUTF8 = function (str) { var size = lengthBytesUTF8(str) + 1; var ret = _malloc(size); if (ret)
            stringToUTF8(str, ret, size); return ret; };
        var __tzset_js = function (timezone, daylight, tzname) { var currentYear = (new Date).getFullYear(); var winter = new Date(currentYear, 0, 1); var summer = new Date(currentYear, 6, 1); var winterOffset = winter.getTimezoneOffset(); var summerOffset = summer.getTimezoneOffset(); var stdTimezoneOffset = Math.max(winterOffset, summerOffset); HEAPU32[timezone >> 2] = stdTimezoneOffset * 60; HEAP32[daylight >> 2] = Number(winterOffset != summerOffset); function extractZone(date) { var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/); return match ? match[1] : "GMT"; } var winterName = extractZone(winter); var summerName = extractZone(summer); var winterNamePtr = stringToNewUTF8(winterName); var summerNamePtr = stringToNewUTF8(summerName); if (summerOffset < winterOffset) {
            HEAPU32[tzname >> 2] = winterNamePtr;
            HEAPU32[tzname + 4 >> 2] = summerNamePtr;
        }
        else {
            HEAPU32[tzname >> 2] = summerNamePtr;
            HEAPU32[tzname + 4 >> 2] = winterNamePtr;
        } };
        var _abort = function () { abort(""); };
        var _emscripten_memcpy_big = function (dest, src, num) { return HEAPU8.copyWithin(dest, src, src + num); };
        var getHeapMax = function () { return 2147483648; };
        var growMemory = function (size) { var b = wasmMemory.buffer; var pages = size - b.byteLength + 65535 >>> 16; try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
        }
        catch (e) { } };
        var _emscripten_resize_heap = function (requestedSize) { var oldSize = HEAPU8.length; requestedSize >>>= 0; var maxHeapSize = getHeapMax(); if (requestedSize > maxHeapSize) {
            return false;
        } var alignUp = function (x, multiple) { return x + (multiple - x % multiple) % multiple; }; for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = growMemory(newSize);
            if (replacement) {
                return true;
            }
        } return false; };
        var ENV = {};
        var getExecutableName = function () { return thisProgram || "./this.program"; };
        var getEnvStrings = function () { if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
            for (var x in ENV) {
                if (ENV[x] === undefined)
                    delete env[x];
                else
                    env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
                strings.push("".concat(x, "=").concat(env[x]));
            }
            getEnvStrings.strings = strings;
        } return getEnvStrings.strings; };
        var stringToAscii = function (str, buffer) { for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer++ >> 0] = str.charCodeAt(i);
        } HEAP8[buffer >> 0] = 0; };
        var _environ_get = function (__environ, environ_buf) { var bufSize = 0; getEnvStrings().forEach((function (string, i) { var ptr = environ_buf + bufSize; HEAPU32[__environ + i * 4 >> 2] = ptr; stringToAscii(string, ptr); bufSize += string.length + 1; })); return 0; };
        var _environ_sizes_get = function (penviron_count, penviron_buf_size) { var strings = getEnvStrings(); HEAPU32[penviron_count >> 2] = strings.length; var bufSize = 0; strings.forEach((function (string) { bufSize += string.length + 1; })); HEAPU32[penviron_buf_size >> 2] = bufSize; return 0; };
        var _proc_exit = function (code) { EXITSTATUS = code; if (!keepRuntimeAlive()) {
            if (Module["onExit"])
                Module["onExit"](code);
            ABORT = true;
        } quit_(code, new ExitStatus(code)); };
        var exitJS = function (status, implicit) { EXITSTATUS = status; _proc_exit(status); };
        var _exit = exitJS;
        function _fd_close(fd) { try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.close(stream);
            return 0;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return e.errno;
        } }
        var doReadv = function (stream, iov, iovcnt, offset) { var ret = 0; for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
                return -1;
            ret += curr;
            if (curr < len)
                break;
            if (typeof offset !== "undefined") {
                offset += curr;
            }
        } return ret; };
        function _fd_read(fd, iov, iovcnt, pnum) { try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt);
            HEAPU32[pnum >> 2] = num;
            return 0;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return e.errno;
        } }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) { var offset = convertI32PairToI53Checked(offset_low, offset_high); try {
            if (isNaN(offset))
                return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.llseek(stream, offset, whence);
            tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
            if (stream.getdents && offset === 0 && whence === 0)
                stream.getdents = null;
            return 0;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return e.errno;
        } }
        var doWritev = function (stream, iov, iovcnt, offset) { var ret = 0; for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
                return -1;
            ret += curr;
            if (typeof offset !== "undefined") {
                offset += curr;
            }
        } return ret; };
        function _fd_write(fd, iov, iovcnt, pnum) { try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt);
            HEAPU32[pnum >> 2] = num;
            return 0;
        }
        catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError"))
                throw e;
            return e.errno;
        } }
        function getCFunc(ident) { var func = Module["_" + ident]; return func; }
        var writeArrayToMemory = function (array, buffer) { HEAP8.set(array, buffer); };
        var stringToUTF8OnStack = function (str) { var size = lengthBytesUTF8(str) + 1; var ret = stackAlloc(size); stringToUTF8(str, ret, size); return ret; };
        var ccall = function (ident, returnType, argTypes, args, opts) { var toC = { "string": function (str) { var ret = 0; if (str !== null && str !== undefined && str !== 0) {
                ret = stringToUTF8OnStack(str);
            } return ret; }, "array": function (arr) { var ret = stackAlloc(arr.length); writeArrayToMemory(arr, ret); return ret; } }; function convertReturnValue(ret) { if (returnType === "string") {
            return UTF8ToString(ret);
        } if (returnType === "boolean")
            return Boolean(ret); return ret; } var func = getCFunc(ident); var cArgs = []; var stack = 0; if (args) {
            for (var i = 0; i < args.length; i++) {
                var converter = toC[argTypes[i]];
                if (converter) {
                    if (stack === 0)
                        stack = stackSave();
                    cArgs[i] = converter(args[i]);
                }
                else {
                    cArgs[i] = args[i];
                }
            }
        } var ret = func.apply(null, cArgs); function onDone(ret) { if (stack !== 0)
            stackRestore(stack); return convertReturnValue(ret); } ret = onDone(ret); return ret; };
        var cwrap = function (ident, returnType, argTypes, opts) { var numericArgs = !argTypes || argTypes.every((function (type) { return type === "number" || type === "boolean"; })); var numericRet = returnType !== "string"; if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
        } return function () { return ccall(ident, returnType, argTypes, arguments, opts); }; };
        var FSNode = function (parent, name, mode, rdev) { if (!parent) {
            parent = this;
        } this.parent = parent; this.mount = parent.mount; this.mounted = null; this.id = FS.nextInode++; this.name = name; this.mode = mode; this.node_ops = {}; this.stream_ops = {}; this.rdev = rdev; };
        var readMode = 292 | 73;
        var writeMode = 146;
        Object.defineProperties(FSNode.prototype, { read: { get: function () { return (this.mode & readMode) === readMode; }, set: function (val) { val ? this.mode |= readMode : this.mode &= ~readMode; } }, write: { get: function () { return (this.mode & writeMode) === writeMode; }, set: function (val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; } }, isFolder: { get: function () { return FS.isDir(this.mode); } }, isDevice: { get: function () { return FS.isChrdev(this.mode); } } });
        FS.FSNode = FSNode;
        FS.createPreloadedFile = FS_createPreloadedFile;
        FS.staticInit();
        var wasmImports = { i: ___syscall_dup, a: ___syscall_fcntl64, v: ___syscall_fstat64, s: ___syscall_lstat64, t: ___syscall_newfstatat, w: ___syscall_openat, r: ___syscall_pipe, q: ___syscall_poll, u: ___syscall_stat64, k: __localtime_js, l: __mktime_js, m: __timegm_js, p: __tzset_js, d: _abort, h: _emscripten_memcpy_big, o: _emscripten_resize_heap, f: _environ_get, g: _environ_sizes_get, e: _exit, c: _fd_close, j: _fd_read, n: _fd_seek, b: _fd_write };
        var asm = createWasm();
        var ___wasm_call_ctors = function () { return (___wasm_call_ctors = Module["asm"]["y"]).apply(null, arguments); };
        var _archive_read_new_memory = Module["_archive_read_new_memory"] = function () { return (_archive_read_new_memory = Module["_archive_read_new_memory"] = Module["asm"]["z"]).apply(null, arguments); };
        var _archive_read_new = Module["_archive_read_new"] = function () { return (_archive_read_new = Module["_archive_read_new"] = Module["asm"]["A"]).apply(null, arguments); };
        var _archive_read_support_filter_all = Module["_archive_read_support_filter_all"] = function () { return (_archive_read_support_filter_all = Module["_archive_read_support_filter_all"] = Module["asm"]["B"]).apply(null, arguments); };
        var _archive_read_support_format_all = Module["_archive_read_support_format_all"] = function () { return (_archive_read_support_format_all = Module["_archive_read_support_format_all"] = Module["asm"]["C"]).apply(null, arguments); };
        var _archive_read_add_passphrase = Module["_archive_read_add_passphrase"] = function () { return (_archive_read_add_passphrase = Module["_archive_read_add_passphrase"] = Module["asm"]["D"]).apply(null, arguments); };
        var _archive_read_open_memory = Module["_archive_read_open_memory"] = function () { return (_archive_read_open_memory = Module["_archive_read_open_memory"] = Module["asm"]["E"]).apply(null, arguments); };
        var _archive_read_next_entry = Module["_archive_read_next_entry"] = function () { return (_archive_read_next_entry = Module["_archive_read_next_entry"] = Module["asm"]["F"]).apply(null, arguments); };
        var _archive_entry_ctime = Module["_archive_entry_ctime"] = function () { return (_archive_entry_ctime = Module["_archive_entry_ctime"] = Module["asm"]["H"]).apply(null, arguments); };
        var _archive_entry_filetype = Module["_archive_entry_filetype"] = function () { return (_archive_entry_filetype = Module["_archive_entry_filetype"] = Module["asm"]["I"]).apply(null, arguments); };
        var _archive_entry_hardlink_utf8 = Module["_archive_entry_hardlink_utf8"] = function () { return (_archive_entry_hardlink_utf8 = Module["_archive_entry_hardlink_utf8"] = Module["asm"]["J"]).apply(null, arguments); };
        var _archive_entry_mtime = Module["_archive_entry_mtime"] = function () { return (_archive_entry_mtime = Module["_archive_entry_mtime"] = Module["asm"]["K"]).apply(null, arguments); };
        var _archive_entry_pathname_utf8 = Module["_archive_entry_pathname_utf8"] = function () { return (_archive_entry_pathname_utf8 = Module["_archive_entry_pathname_utf8"] = Module["asm"]["L"]).apply(null, arguments); };
        var _archive_entry_size = Module["_archive_entry_size"] = function () { return (_archive_entry_size = Module["_archive_entry_size"] = Module["asm"]["M"]).apply(null, arguments); };
        var _archive_entry_symlink_utf8 = Module["_archive_entry_symlink_utf8"] = function () { return (_archive_entry_symlink_utf8 = Module["_archive_entry_symlink_utf8"] = Module["asm"]["N"]).apply(null, arguments); };
        var _archive_entry_is_encrypted = Module["_archive_entry_is_encrypted"] = function () { return (_archive_entry_is_encrypted = Module["_archive_entry_is_encrypted"] = Module["asm"]["O"]).apply(null, arguments); };
        var _free = Module["_free"] = function () { return (_free = Module["_free"] = Module["asm"]["P"]).apply(null, arguments); };
        var ___errno_location = function () { return (___errno_location = Module["asm"]["Q"]).apply(null, arguments); };
        var _malloc = Module["_malloc"] = function () { return (_malloc = Module["_malloc"] = Module["asm"]["R"]).apply(null, arguments); };
        var _archive_read_has_encrypted_entries = Module["_archive_read_has_encrypted_entries"] = function () { return (_archive_read_has_encrypted_entries = Module["_archive_read_has_encrypted_entries"] = Module["asm"]["S"]).apply(null, arguments); };
        var _archive_read_data = Module["_archive_read_data"] = function () { return (_archive_read_data = Module["_archive_read_data"] = Module["asm"]["T"]).apply(null, arguments); };
        var _archive_read_data_skip = Module["_archive_read_data_skip"] = function () { return (_archive_read_data_skip = Module["_archive_read_data_skip"] = Module["asm"]["U"]).apply(null, arguments); };
        var _archive_version_number = Module["_archive_version_number"] = function () { return (_archive_version_number = Module["_archive_version_number"] = Module["asm"]["V"]).apply(null, arguments); };
        var _archive_version_string = Module["_archive_version_string"] = function () { return (_archive_version_string = Module["_archive_version_string"] = Module["asm"]["W"]).apply(null, arguments); };
        var _archive_error_string = Module["_archive_error_string"] = function () { return (_archive_error_string = Module["_archive_error_string"] = Module["asm"]["X"]).apply(null, arguments); };
        var _archive_version_details = Module["_archive_version_details"] = function () { return (_archive_version_details = Module["_archive_version_details"] = Module["asm"]["Y"]).apply(null, arguments); };
        var _archive_read_free = Module["_archive_read_free"] = function () { return (_archive_read_free = Module["_archive_read_free"] = Module["asm"]["Z"]).apply(null, arguments); };
        var setTempRet0 = function () { return (setTempRet0 = Module["asm"]["_"]).apply(null, arguments); };
        var stackSave = function () { return (stackSave = Module["asm"]["$"]).apply(null, arguments); };
        var stackRestore = function () { return (stackRestore = Module["asm"]["aa"]).apply(null, arguments); };
        var stackAlloc = function () { return (stackAlloc = Module["asm"]["ba"]).apply(null, arguments); };
        Module["cwrap"] = cwrap;
        var calledRun;
        dependenciesFulfilled = function runCaller() { if (!calledRun)
            run(); if (!calledRun)
            dependenciesFulfilled = runCaller; };
        function run() { if (runDependencies > 0) {
            return;
        } preRun(); if (runDependencies > 0) {
            return;
        } function doRun() { if (calledRun)
            return; calledRun = true; Module["calledRun"] = true; if (ABORT)
            return; initRuntime(); readyPromiseResolve(Module); if (Module["onRuntimeInitialized"])
            Module["onRuntimeInitialized"](); postRun(); } if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout((function () { setTimeout((function () { Module["setStatus"](""); }), 1); doRun(); }), 1);
        }
        else {
            doRun();
        } }
        if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function")
                Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
                Module["preInit"].pop()();
            }
        }
        run();
        return moduleArg.ready;
    });
})();
if (true)
    module.exports = libarchive;
else {}


/***/ }),

/***/ 452:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.libarchiveWasm = void 0;
var libarchive_1 = __importDefault(__nccwpck_require__(620));
var wrapLibarchiveWasm_1 = __nccwpck_require__(808);
function libarchiveWasm() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new Promise(function (resolve) {
        libarchive_1.default.apply(void 0, args).then(function (mod) {
            resolve((0, wrapLibarchiveWasm_1.wrapLibarchiveWasm)(mod));
        });
    });
}
exports.libarchiveWasm = libarchiveWasm;


/***/ }),

/***/ 808:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapLibarchiveWasm = void 0;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function wrapLibarchiveWasm(module) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var checkReturnValue = function (fn, test) {
        return function f() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var r = fn.apply(void 0, args);
            if (test(r))
                throw new Error(this.error_string(args[0]));
            return r;
        };
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    var nonzero = function (r) { return r !== 0; };
    return {
        module: module,
        version_number: module.cwrap('archive_version_number', 'number', []),
        version_string: module.cwrap('archive_version_string', 'string', []),
        version_details: module.cwrap('archive_version_details', 'string', []),
        read_new_memory: checkReturnValue(module.cwrap('archive_read_new_memory', 'number', [
            'number',
            'number',
            'string',
        ]), function (r) { return r === 0; }),
        read_new: module.cwrap('archive_read_new', 'number', []),
        read_support_filter_all: checkReturnValue(module.cwrap('archive_read_support_filter_all', 'number', ['number']), nonzero),
        read_support_format_all: checkReturnValue(module.cwrap('archive_read_support_format_all', 'number', ['number']), nonzero),
        read_open_memory: checkReturnValue(module.cwrap('archive_read_open_memory', 'number', ['number', 'number', 'number']), nonzero),
        read_next_entry: module.cwrap('archive_read_next_entry', 'number', ['number']),
        read_has_encrypted_entries: module.cwrap('archive_read_has_encrypted_entries', 'number', [
            'number',
        ]),
        read_data: checkReturnValue(module.cwrap('archive_read_data', 'number', ['number', 'number', 'number']), function (r) { return r < 0; }),
        read_data_skip: checkReturnValue(module.cwrap('archive_read_data_skip', 'number', ['number']), nonzero),
        read_add_passphrase: checkReturnValue(module.cwrap('archive_read_add_passphrase', 'number', ['number', 'string']), nonzero),
        read_free: checkReturnValue(module.cwrap('archive_read_free', 'number', ['number']), nonzero),
        error_string: module.cwrap('archive_error_string', 'string', ['number']),
        entry_filetype: module.cwrap('archive_entry_filetype', 'number', ['number']),
        entry_pathname: module.cwrap('archive_entry_pathname_utf8', 'string', ['number']),
        entry_symlink: module.cwrap('archive_entry_symlink_utf8', 'string', ['number']),
        entry_hardlink: module.cwrap('archive_entry_hardlink_utf8', 'string', ['number']),
        entry_size: module.cwrap('archive_entry_size', 'number', ['number']),
        entry_ctime: module.cwrap('archive_entry_ctime', 'number', ['number']),
        entry_mtime: module.cwrap('archive_entry_mtime', 'number', ['number']),
        entry_is_encrypted: module.cwrap('archive_entry_is_encrypted', 'number', ['number']),
    };
}
exports.wrapLibarchiveWasm = wrapLibarchiveWasm;


/***/ }),

/***/ 770:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(218);


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(278);
var tls = __nccwpck_require__(756);
var http = __nccwpck_require__(611);
var https = __nccwpck_require__(692);
var events = __nccwpck_require__(434);
var assert = __nccwpck_require__(613);
var util = __nccwpck_require__(23);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 730:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = run;
const core = __importStar(__nccwpck_require__(484));
const fs = __importStar(__nccwpck_require__(896));
const stream_1 = __nccwpck_require__(203);
const promises_1 = __nccwpck_require__(786);
const path_1 = __importDefault(__nccwpck_require__(928));
const os_1 = __importDefault(__nccwpck_require__(857));
const util_1 = __importDefault(__nccwpck_require__(23));
const promises_2 = __nccwpck_require__(455);
const libarchive_wasm_1 = __nccwpck_require__(339);
const PlatformMap = {
    darwin: 'mac',
    freebsd: 'linux',
    linux: 'linux',
    openbsd: 'linux',
    win32: 'windows'
};
const tmpDir = fs.mkdtempSync(path_1.default.join(os_1.default.tmpdir(), 'qt-creator-downloader'));
// Download the url and save it to the specified file
async function downloadPackage(url, destination) {
    const res = await fetch(url);
    if (!res.body)
        throw new Error('Response body is undefined');
    if (res.status !== 200) {
        throw new Error(`Failed to download ${url}: ${res.statusText}`);
    }
    const fileStream = fs.createWriteStream(destination, { flags: 'wx' });
    return (0, promises_1.finished)(stream_1.Readable.fromWeb(res.body).pipe(fileStream));
}
async function downloadQtC(urls) {
    const errors = [];
    const packages = ['qtcreator.7z', 'qtcreator_dev.7z'];
    for (const url of urls) {
        try {
            for (const packageName of packages) {
                const fullUrl = `${url}/${packageName}`;
                core.info(`Downloading ${fullUrl}`);
                await downloadPackage(fullUrl, `${tmpDir}/${packageName}`);
            }
            return packages.map(packageName => `${tmpDir}/${packageName}`);
        }
        catch (error) {
            core.warning(util_1.default.inspect(error));
            errors.push(util_1.default.inspect(error));
        }
    }
    throw new Error(`Failed to download Qt Creator packages: ${errors.join('\n')}`);
}
async function extract(archive, destination) {
    console.log('Extracting', archive, 'to', destination);
    const data = await (0, promises_2.readFile)(archive);
    const mod = await (0, libarchive_wasm_1.libarchiveWasm)();
    const reader = new libarchive_wasm_1.ArchiveReader(mod, new Int8Array(data));
    for (const entry of reader.entries()) {
        const type = entry.getFiletype();
        const pathName = entry.getPathname();
        const destinationPath = path_1.default.join(destination, pathName);
        if (path_1.default.isAbsolute(pathName)) {
            throw new Error('Absolute path in archive detected, aborting.');
        }
        if (type === 'Directory') {
            if (!fs.existsSync(destinationPath)) {
                await (0, promises_2.mkdir)(destinationPath);
            }
            else if (!fs.statSync(destinationPath).isDirectory()) {
                throw new Error(`Path already exists and is not a directory: ${destinationPath}`);
            }
            continue;
        }
        else if (type === 'SymbolicLink') {
            await (0, promises_2.symlink)(entry.getSymlinkTarget(), destinationPath);
            continue;
        }
        else if (type === 'File') {
            const size = entry.getSize();
            if (size > 0) {
                const entryData = entry.readData();
                if (!entryData)
                    throw new Error(`Failed to read data for ${pathName}`);
                await (0, promises_2.writeFile)(destinationPath, entryData);
            }
            else {
                await (0, promises_2.writeFile)(destinationPath, '');
            }
        }
        else {
            throw new Error(`Unsupported entry type: ${type}`);
        }
    }
    reader.free();
}
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
    try {
        const version = core.getInput('version');
        const destination = core.getInput('unzip-to');
        const platformInput = core.getInput('platform');
        if (!platformInput && !(process.platform in PlatformMap)) {
            core.setFailed(`Unsupported platform: ${process.platform}`);
            return;
        }
        const platformName = PlatformMap[process.platform];
        const arch = process.platform === 'darwin' ? 'x64' : process.arch;
        const platform = platformInput ? platformInput : `${platformName}_${arch}`;
        // Extract the major and minor versions
        const [major, minor] = version.split('.').slice(0, 2);
        const folderPath = `${major}.${minor}/${version}`;
        const urls = [
            `https://download.qt.io/official_releases/qtcreator/${folderPath}/installer_source/${platform}`,
            `https://download.qt.io/development_releases/qtcreator/${folderPath}/installer_source/${platform}`,
            `https://download.qt.io/snapshots/qtcreator/${folderPath}/installer_source/latest/${platform}`
        ];
        const packages = await downloadQtC(urls);
        if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination, { recursive: true });
        }
        for (const packageFile of packages) {
            // Unzip the downloaded file
            core.info(`Unzipping package: ${packageFile}`);
            await extract(packageFile, destination);
        }
        core.info(`Qt Creator ${version} has been extracted to ${destination}`);
        // Set outputs for other workflow steps to use
        core.setOutput('path', destination);
        core.setOutput('path-with-slashes', path_1.default.resolve(destination).split(path_1.default.sep).join('/'));
    }
    catch (error) {
        // Fail the workflow run if an error occurs
        core.setFailed(util_1.default.inspect(error));
    }
}


/***/ }),

/***/ 613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 455:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 786:
/***/ ((module) => {

"use strict";
module.exports = require("stream/promises");

/***/ }),

/***/ 193:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 23:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * The entrypoint for the action.
 */
const main_1 = __nccwpck_require__(730);
(0, main_1.run)();

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map