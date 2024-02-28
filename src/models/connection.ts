import { DATABASE, SERVER } from "../common/constantes";
import * as sql from 'msnodesqlv8';

export class connection {
    dbContext(){
      //DEFINIR CADENA DE CONEXION
      const connectionString = `server=${SERVER};Database=${DATABASE};Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}`;
      return connectionString;
    }

    async executeSQL(connectionString: string, sqlQuery: string): Promise<any> {
      return new Promise((resolve, reject) => {
        sql.open(connectionString, (err, connection) => {
            if (err) {
                reject(err);
                return;
            }

            connection.query(sqlQuery, (err, rows) => {
                if (err) {
                    connection.close(() => reject(err));
                } else {
                    connection.close(() => resolve(rows));
                }
            });
        });
    });
  }

}
