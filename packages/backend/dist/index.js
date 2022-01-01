"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const app = (0, express_1.default)();
const port = 8080;
const v2Path = (0, path_1.join)(__dirname, '../frontends');
app.use(express_1.default.static(v2Path));
app.get('/v1', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, '../frontends', 'v1/index.html'));
});
app.get('/', (req, res) => {
    res.redirect('/frontend-v2/#');
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map