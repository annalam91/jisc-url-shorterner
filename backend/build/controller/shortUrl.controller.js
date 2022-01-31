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
exports.handleRedirect = exports.createShortUrl = void 0;
const shortUrl_model_1 = __importDefault(require("../models/shortUrl.model"));
function createShortUrl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { destination } = req.body;
        const newURL = yield shortUrl_model_1.default.create({ destination });
        return res.send(newURL);
    });
}
exports.createShortUrl = createShortUrl;
function handleRedirect(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { shortId } = req.params;
        // Lean makes the queries faster and less memory intensive.
        // Will result in giving you Plain Old JavaScript Objects (POJOs) not mongoose documents.
        const short = yield shortUrl_model_1.default.findOne({ shortId }).lean();
        if (!short) {
            return res.sendStatus(404);
        }
        return res.redirect(short.destination);
    });
}
exports.handleRedirect = handleRedirect;
;
