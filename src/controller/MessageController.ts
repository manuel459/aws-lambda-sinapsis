import { IMessageServices } from "../interfaces/IMessageServices";
import { IRequest } from "../interfaces/IRequest";

export class MessageController {
    //INSTANCIAR CAPA DE SERVICIO
    _messageServices :IMessageServices
    // APLICAR INYECCION DE DEPENDENCIA PARA LA CAPA DE SERVICIO
    constructor(messageServices :IMessageServices){
        this._messageServices = messageServices;
    }

    async getMessage(request :IRequest){
        var response = this._messageServices.getMessage(request);
        return response;
    }
}