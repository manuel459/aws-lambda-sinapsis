import sql from "msnodesqlv8";
import { IMessageRepository } from "../interfaces/IMessageRepository";
import { connection } from "../models/connection";
import { IRequest } from '../interfaces/IRequest';
import { IResponse } from "../interfaces/IResponse";
import { MESSAGE_ERROR_CONNECTION, MESSAGE_SUCCEST_CONNECTION } from "../common/constantes";

export class MessageRepository implements IMessageRepository{

    _connection: connection

    constructor(connection: connection){
        this._connection = connection
    }

    async getMessage(request :IRequest){
        var response : IResponse = { succest : false, message: "", body: {}};

        let sqlQuery = `
                          SELECT m.estadoEnvio, COUNT(*) as cantidad
                          FROM cliente c
                          JOIN usuario u ON c.idCliente = u.idCliente
                          JOIN campania c2 ON c2.idUsuario = u.idUsuario
                          JOIN mensaje m ON m.fechaHoraEnvio = c2.fechaHoraProgramacion
                          WHERE m.estado = 1
                            AND MONTH(m.fechaHoraEnvio) = ${request.mes}
                        `;

          if(request.id != null){
            sqlQuery += ` AND c.idCliente = ${request.id}`;
          }
          sqlQuery += ' GROUP BY m.estadoEnvio';

          try {
            const connectionString = await this._connection.dbContext();
            const result = await new Promise((resolve, reject) => {
                sql.query(connectionString, sqlQuery, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            });

            response.succest = true;
            response.message = MESSAGE_SUCCEST_CONNECTION;
            response.body = result;
      
        } catch (error) {
            response.message = MESSAGE_ERROR_CONNECTION;
            response.body = error;
        }
        return response;
    }
}