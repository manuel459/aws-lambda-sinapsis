import { IMessageServices } from "../interfaces/IMessageServices";
import { IRequest } from "../interfaces/IRequest";

export class MessageController {

    _messageServices :IMessageServices

    constructor(messageServices :IMessageServices){
        this._messageServices = messageServices;
    }

    async getMessage(request :IRequest){
        var response = this._messageServices.getMessage(request);
        return response;
    }
}