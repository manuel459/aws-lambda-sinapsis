import { MESSAGE_ERROR_EXCEPTION, MESSAGE_ERROR_SUCCEST, MESSAGE_VALIDATE_MONTH } from "../common/constantes";
import { IMessageRepository } from "../interfaces/IMessageRepository";
import { IMessageServices } from "../interfaces/IMessageServices";
import { IRequest } from "../interfaces/IRequest";
import { IResponse } from "../interfaces/IResponse"

export class MessageServices implements IMessageServices{

    _messageRepository: IMessageRepository;

    constructor(messageRepository: IMessageRepository ){
        this._messageRepository = messageRepository;
    }

    async getMessage(request :IRequest) {
        var response : IResponse = { succest : false, message: "", body: {}};

        try {
            var requestDto = JSON.parse(request.toString());
            if(requestDto.mes === null){
                response.message = MESSAGE_VALIDATE_MONTH;
                return response;
            }
            var messages = await this._messageRepository.getMessage(requestDto);
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
}