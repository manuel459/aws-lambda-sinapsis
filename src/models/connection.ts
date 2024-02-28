import { DATABASE, SERVER } from "../common/constantes";

export class connection {
    async dbContext(){
      //DEFINIR CADENA DE CONEXION
      const connectionString = `server=${SERVER};Database=${DATABASE};Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}`;
      return connectionString;
    }
}