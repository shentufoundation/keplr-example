/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import "zx/globals";
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var outDir, protoTsBinPath, baseDirPath, baseProtoPath_1, thirdPartyProtoPath_1, inputs, thirdPartyInputs, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                outDir = path.join(__dirname, "../src");
                $.verbose = false;
                return [4 /*yield*/, $(templateObject_1 || (templateObject_1 = __makeTemplateObject(["mkdir -p ", ""], ["mkdir -p ", ""])), outDir)];
            case 1:
                _a.sent();
                $.verbose = true;
                protoTsBinPath = path.join(__dirname, "../../../node_modules/.bin/protoc-gen-ts_proto");
                baseDirPath = path.join(__dirname, "..");
                baseProtoPath_1 = path.join(baseDirPath, "proto");
                thirdPartyProtoPath_1 = path.join(baseDirPath, "third_party/proto");
                inputs = [
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
                thirdPartyInputs = ["tendermint/crypto/keys.proto"];
                return [4 /*yield*/, $(templateObject_2 || (templateObject_2 = __makeTemplateObject(["protoc       --plugin=", "       --ts_proto_opt=forceLong=string       --ts_proto_opt=esModuleInterop=true       --ts_proto_opt=outputClientImpl=false       --proto_path=", "       --proto_path=", "       --ts_proto_out=", "       ", "       ", ""], ["protoc \\\n      --plugin=", " \\\n      --ts_proto_opt=forceLong=string \\\n      --ts_proto_opt=esModuleInterop=true \\\n      --ts_proto_opt=outputClientImpl=false \\\n      --proto_path=", " \\\n      --proto_path=", " \\\n      --ts_proto_out=", " \\\n      ", " \\\n      ", ""])), protoTsBinPath, baseProtoPath_1, thirdPartyProtoPath_1, outDir, inputs.map(function (i) { return path.join(baseProtoPath_1, i); }), thirdPartyInputs.map(function (i) { return path.join(thirdPartyProtoPath_1, i); }))];
            case 2:
                _a.sent();
                $.verbose = false;
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                process.exit(1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
var templateObject_1, templateObject_2;
