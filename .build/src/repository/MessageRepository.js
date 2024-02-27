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
exports.MessageRepository = void 0;
const msnodesqlv8_1 = __importDefault(require("msnodesqlv8"));
const constantes_1 = require("../common/constantes");
class MessageRepository {
    constructor(connection) {
        this._connection = connection;
    }
    getMessage(request) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = { succest: false, message: "", body: {} };
            let sqlQuery = `
                          SELECT m.estadoEnvio, COUNT(*) as cantidad
                          FROM cliente c
                          JOIN usuario u ON c.idCliente = u.idCliente
                          JOIN campania c2 ON c2.idUsuario = u.idUsuario
                          JOIN mensaje m ON m.fechaHoraEnvio = c2.fechaHoraProgramacion
                          WHERE m.estado = 1
                            AND MONTH(m.fechaHoraEnvio) = ${request.mes}
                        `;
            if (request.id != null) {
                sqlQuery += ` AND c.idCliente = ${request.id}`;
            }
            sqlQuery += ' GROUP BY m.estadoEnvio';
            try {
                const connectionString = yield this._connection.dbContext();
                const result = yield new Promise((resolve, reject) => {
                    msnodesqlv8_1.default.query(connectionString, sqlQuery, (err, rows) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve(rows);
                        }
                    });
                });
                response.succest = true;
                response.message = constantes_1.MESSAGE_SUCCEST_CONNECTION;
                response.body = result;
            }
            catch (error) {
                response.message = constantes_1.MESSAGE_ERROR_CONNECTION;
                response.body = error;
            }
            return response;
        });
    }
}
exports.MessageRepository = MessageRepository;
