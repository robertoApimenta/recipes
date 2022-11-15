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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const Category_1 = require("../../models/Category");
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, icon } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Preencha o nome da categoria' });
        }
        if (!icon) {
            return res.status(400).json({ message: 'Preencha o icone da categoria' });
        }
        const category = yield Category_1.Category.create({ name, icon });
        res.status(201).json(category);
    });
}
exports.createCategory = createCategory;
;
