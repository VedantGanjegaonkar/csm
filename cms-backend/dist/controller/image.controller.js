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
exports.uploadImage = void 0;
const image_model_1 = __importDefault(require("../models/image.model"));
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { file } = req;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }
        const image = new image_model_1.default({
            filename: file.filename,
            path: file.path,
            size: file.size,
            mimetype: file.mimetype,
        });
        yield image.save();
        res.status(201).json(image);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.uploadImage = uploadImage;
