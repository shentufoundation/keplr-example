var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
var DEFAULT_INPUTS = [
    "cosmos/auth/v1alpha1/vesting.proto",
    "cosmos/authz/v1beta1/authz.proto",
    "cosmos/authz/v1beta1/tx.proto",
    "cosmos/base/v1beta1/coin.proto",
    "cosmos/bank/v1beta1/bank.proto",
    "cosmos/bank/v1beta1/tx.proto",
    "cosmos/bank/v1beta1/authz.proto",
    "cosmos/staking/v1beta1/tx.proto",
    "cosmos/staking/v1beta1/authz.proto",
    "cosmos/gov/v1beta1/gov.proto",
    "cosmos/gov/v1beta1/tx.proto",
    "cosmos/gov/v1/tx.proto",
    "cosmos/gov/v1/gov.proto",
    "cosmos/distribution/v1beta1/distribution.proto",
    "cosmos/distribution/v1beta1/tx.proto",
    "cosmos/crypto/multisig/v1beta1/multisig.proto",
    "cosmos/crypto/ed25519/keys.proto",
    "cosmos/crypto/secp256k1/keys.proto",
    "cosmos/crypto/secp256r1/keys.proto",
    "cosmos/tx/v1beta1/tx.proto",
    "cosmos/tx/signing/v1beta1/signing.proto",
    "cosmos/base/abci/v1beta1/abci.proto",
    "cosmwasm/wasm/v1/tx.proto",
    "ibc/applications/transfer/v1/tx.proto",
    "osmosis/gamm/v1beta1/tx.proto",
    "osmosis/gamm/pool-models/balancer/tx/tx.proto",
    "osmosis/gamm/pool-models/stableswap/tx.proto",
    "shentu/auth/v1alpha1/tx.proto",
    "shentu/bank/v1alpha1/tx.proto",
    "shentu/bounty/v1/bounty.proto",
    "shentu/bounty/v1/tx.proto",
    "shentu/cert/v1alpha1/cert.proto",
    "shentu/cert/v1alpha1/tx.proto",
    "shentu/oracle/v1alpha1/oracle.proto",
    "shentu/oracle/v1alpha1/tx.proto",
    "shentu/shield/v1alpha1/shield.proto",
    "shentu/shield/v1alpha1/tx.proto"
];
var DEFAULT_THIRD_PARTY_INPUTS = [
    "tendermint/crypto/keys.proto"
];
export function generateProtoTypes(options) {
    return __awaiter(this, void 0, void 0, function () {
        var outputDir, inputDir, configFile, config, configContent, packageDir, defaultProtoPath, defaultThirdPartyPath, baseProtoPath, thirdPartyProtoPath, protoTsBinPath, inputs, thirdPartyInputs, tsProtoOptions, protocOptions, protocCommand;
        return __generator(this, function (_a) {
            outputDir = options.outputDir, inputDir = options.inputDir, configFile = options.configFile;
            config = {};
            if (configFile && fs.existsSync(configFile)) {
                try {
                    configContent = fs.readFileSync(configFile, 'utf-8');
                    config = JSON.parse(configContent);
                }
                catch (error) {
                    throw new Error("Failed to parse config file: ".concat(error));
                }
            }
            packageDir = path.resolve(__dirname, '../../');
            defaultProtoPath = path.join(packageDir, 'src/proto-types-gen/proto');
            defaultThirdPartyPath = path.join(packageDir, 'src/proto-types-gen/third_party/proto');
            baseProtoPath = inputDir || defaultProtoPath;
            thirdPartyProtoPath = path.join(path.dirname(baseProtoPath), 'third_party/proto');
            // Ensure output directory exists
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }
            protoTsBinPath = getProtocGenTsProtoPath();
            inputs = config.inputs || DEFAULT_INPUTS;
            thirdPartyInputs = config.thirdPartyInputs || DEFAULT_THIRD_PARTY_INPUTS;
            tsProtoOptions = config.tsProtoOptions || {
                forceLong: 'string',
                esModuleInterop: true,
                outputClientImpl: false
            };
            protocOptions = __spreadArray(__spreadArray([
                "--plugin=".concat(protoTsBinPath),
                "--ts_proto_opt=forceLong=".concat(tsProtoOptions.forceLong),
                "--ts_proto_opt=esModuleInterop=".concat(tsProtoOptions.esModuleInterop),
                "--ts_proto_opt=outputClientImpl=".concat(tsProtoOptions.outputClientImpl),
                "--proto_path=".concat(baseProtoPath),
                "--proto_path=".concat(thirdPartyProtoPath),
                "--ts_proto_out=".concat(outputDir)
            ], inputs.map(function (i) { return path.join(baseProtoPath, i); }), true), thirdPartyInputs.map(function (i) { return path.join(thirdPartyProtoPath, i); }), true);
            protocCommand = "protoc ".concat(protocOptions.join(' '));
            try {
                execSync(protocCommand, { stdio: 'inherit' });
            }
            catch (error) {
                throw new Error("Failed to generate proto types: ".concat(error));
            }
            return [2 /*return*/];
        });
    });
}
function getProtocGenTsProtoPath() {
    // Try to find protoc-gen-ts_proto in various locations
    var possiblePaths = [
        path.join(process.cwd(), 'node_modules/.bin/protoc-gen-ts_proto'),
        path.join(__dirname, '../../node_modules/.bin/protoc-gen-ts_proto'),
        path.join(__dirname, '../../../node_modules/.bin/protoc-gen-ts_proto'),
        'protoc-gen-ts_proto' // Global installation
    ];
    for (var _i = 0, possiblePaths_1 = possiblePaths; _i < possiblePaths_1.length; _i++) {
        var binPath = possiblePaths_1[_i];
        if (fs.existsSync(binPath)) {
            return binPath;
        }
    }
    throw new Error('protoc-gen-ts_proto not found. Please install ts-proto package.');
}
export function getBuiltinProtoPath() {
    return path.resolve(__dirname, '../../src/proto-types-gen');
}
