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
exports.MessageServices = void 0;
const constantes_1 = require("../common/constantes");
class MessageServices {
    //APLICAR INYECCION DE DEPENDENCIA
    constructor(messageRepository) {
        this._messageRepository = messageRepository;
    }
    getMessage(request) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = { succest: false, message: "", body: {} };
            try {
                var requestDto = JSON.parse(request.toString());
                //VALIDAR QUE EL MES SEA DE CARACTER OBLIGATORIO
                if (requestDto.mes === null) {
                    response.message = constantes_1.MESSAGE_VALIDATE_MONTH;
                    return response;
                }
                var messages = yield this._messageRepository.getMessage(requestDto);
                //VALIDAR RESPONSE DEL GET MESSAGE
                if (!messages.succest) {
                    response.message = messages.message;
                    response.body = messages.body;
                    return response;
                }
                response.succest = true;
                response.message = constantes_1.MESSAGE_ERROR_SUCCEST;
                response.body = messages.body;
            }
            catch (error) {
                response.message = constantes_1.MESSAGE_ERROR_EXCEPTION;
                response.body = error;
            }
            return response;
        });
    }
    insertCampania(request) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = { succest: false, message: "", body: {} };
            var requestDto = JSON.parse(request.toString());
            try {
                var result = yield this._messageRepository.insertCampania(requestDto);
                if (!result.succest) {
                    response.message = result.message;
                    response.body = result.body;
                    return response;
                }
                response.succest = true;
                response.message = constantes_1.MESSAGE_SUCCEST_INSERT;
                response.body = result;
            }
            catch (error) {
                response.message = constantes_1.MESSAGE_ERROR_EXCEPTION_INSERT;
                response.body = error;
            }
            return response;
        });
    }
}
exports.MessageServices = MessageServices;
