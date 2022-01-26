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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const axios_1 = __importDefault(require("axios"));
// eslint-disable-next-line import/no-unresolved
const utils_1 = require("./utils");
const app = (0, express_1.default)();
const port = 8080;
const v2Path = (0, path_1.join)(__dirname, '../frontends');
app.use(express_1.default.static(v2Path));
app.get('/api/party-reputation', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const externalUrl = 'http://reagent1.f4.htw-berlin.de:8123';
    try {
        const upstreamRequest = yield axios_1.default.get(externalUrl);
        const upstreamData = upstreamRequest.data;
        const manipulatedData = (0, utils_1.manipulatePartyReputationUpstream)(upstreamData);
        res.send({ msg: 'success', data: manipulatedData });
        return;
    }
    catch (e) {
        res.status(400).send({ msg: 'Bad request', e });
    }
}));
app.get('/v1', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, '../frontends', 'v1/index.html'));
});
app.get('/', (req, res) => {
    res.redirect('/frontend-v2/#');
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map