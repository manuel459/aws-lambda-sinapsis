"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const constantes_1 = require("../common/constantes");
class connection {
    dbContext() {
        //DEFINIR CADENA DE CONEXION
        const connectionString = `server=${constantes_1.SERVER};Database=${constantes_1.DATABASE};Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}`;
        return connectionString;
    }
}
exports.connection = connection;
