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
exports.postCampania = exports.post = void 0;
const MessageController_1 = require("./controller/MessageController");
const connection_1 = require("./models/connection");
const MessageRepository_1 = require("./repository/MessageRepository");
const MessageServices_1 = require("./servicio/MessageServices");
const context = new connection_1.connection();
const repository = new MessageRepository_1.MessageRepository(context);
const service = new MessageServices_1.MessageServices(repository);
const post = (request) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new MessageController_1.MessageController(service).getMessage(request.body);
});
exports.post = post;
const postCampania = (request) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new MessageController_1.MessageController(service).insertCampania(request.body);
});
exports.postCampania = postCampania;
