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
exports.connection = void 0;
const constantes_1 = require("../common/constantes");
class connection {
    dbContext() {
        return __awaiter(this, void 0, void 0, function* () {
            //DEFINIR CADENA DE CONEXION
            const connectionString = `server=${constantes_1.SERVER};Database=${constantes_1.DATABASE};Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}`;
            return connectionString;
        });
    }
}
exports.connection = connection;
