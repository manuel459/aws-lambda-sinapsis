import { MESSAGE_ERROR_EXCEPTION, MESSAGE_ERROR_EXCEPTION_INSERT, MESSAGE_ERROR_SUCCEST, MESSAGE_SUCCEST_INSERT, MESSAGE_VALIDATE_MONTH } from "../common/constantes";
import { IMessageRepository } from "../interfaces/IMessageRepository";
import { IMessageServices } from "../interfaces/IMessageServices";
import { IRequest } from "../interfaces/IRequest";
import { IRequestInsert } from "../interfaces/IRequestInsert";
import { IResponse } from "../interfaces/IResponse"

export class MessageServices implements IMessageServices{
    //INSTANCIAR REPOSITORIO
    _messageRepository: IMessageRepository;

    //APLICAR INYECCION DE DEPENDENCIA
    constructor(messageRepository: IMessageRepository ){
        this._messageRepository = messageRepository;
    }

    async getMessage(request :IRequest) {
        var response : IResponse = { succest : false, message: "", body: {}};

        try {
            var requestDto = JSON.parse(request.toString());
            //VALIDAR QUE EL MES SEA DE CARACTER OBLIGATORIO
            if(requestDto.mes === null){
                response.message = MESSAGE_VALIDATE_MONTH;
                return response;
            }
            var messages = await this._messageRepository.getMessage(requestDto);
            //VALIDAR RESPONSE DEL GET MESSAGE
            if(!messages.succest){
                response.message = messages.message;
                response.body = messages.body;
                return response;
            }
            response.succest = true;
            response.message = MESSAGE_ERROR_SUCCEST;
            response.body = messages.body;
            
        } catch (error) {
            response.message = MESSAGE_ERROR_EXCEPTION;
            response.body = error;
        }

        return response;
    }

    async insertCampania(request: IRequestInsert){
        var response : IResponse = { succest : false, message: "", body: {}};

        var requestDto = JSON.parse(request.toString());

        try {
            var result = await this._messageRepository.insertCampania(requestDto);
            if(!result.succest){
                response.message = result.message;
                response.body = result.body;
                return response;
            }
            response.succest = true;
            response.message = MESSAGE_SUCCEST_INSERT;
            response.body = result; 
        } catch (error) {
            response.message = MESSAGE_ERROR_EXCEPTION_INSERT;
            response.body = error;
        }
        return response;
    }
}