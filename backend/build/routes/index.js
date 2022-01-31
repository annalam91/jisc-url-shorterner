"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortUrl_controller_1 = require("../controller/shortUrl.controller");
const validateDestination_1 = __importDefault(require("../middleware/validateDestination"));
const shortUrlSchema_1 = __importDefault(require("../schemas/shortUrlSchema"));
function routes(app) {
    app.post('/api/url', (0, validateDestination_1.default)(shortUrlSchema_1.default), shortUrl_controller_1.createShortUrl);
    app.get("/:shortId", shortUrl_controller_1.handleRedirect);
}
exports.default = routes;
