import { IRequest } from "./IRequest";
import { IResponse } from "./IResponse";

export interface IMessageRepository {
    getMessage(request :IRequest): Promise<IResponse>;
}