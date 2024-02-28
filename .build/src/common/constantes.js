"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE_VALIDATE_MONTH = exports.MESSAGE_ERROR_SUCCEST = exports.MESSAGE_SUCCEST_CONNECTION = exports.MESSAGE_SUCCEST_INSERT = exports.MESSAGE_ERROR_EXCEPTION_INSERT = exports.MESSAGE_ERROR_EXCEPTION = exports.MESSAGE_ERROR_CONNECTION = exports.DRIVER = exports.SERVER = exports.DATABASE = void 0;
//DATOS DE CONEXION
exports.DATABASE = 'Sinapsis';
exports.SERVER = 'DESKTOP-NHMNTAF\\SQLEXPRESS';
exports.DRIVER = 'SQL Server Native Client 11.0';
//EXCEPCIONES
exports.MESSAGE_ERROR_CONNECTION = 'Ocurrio un error en la conexión';
exports.MESSAGE_ERROR_EXCEPTION = 'Ocurrio un error al listar la cantidad de mensajes activos';
exports.MESSAGE_ERROR_EXCEPTION_INSERT = 'Ocurrio un error al insertar la campania';
//EXITO
exports.MESSAGE_SUCCEST_INSERT = "Campaña insertada con exito";
exports.MESSAGE_SUCCEST_CONNECTION = "Cantidad de mensajes activos listados con exito";
exports.MESSAGE_ERROR_SUCCEST = "Cantidad de mensajes activos listados con exito";
//VALIDACIONES
exports.MESSAGE_VALIDATE_MONTH = 'El filtrado del mes es obligatorio';
