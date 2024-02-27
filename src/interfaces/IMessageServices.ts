import { IRequest } from "./IRequest";
import { IResponse } from "./IResponse";

export interface IMessageServices {
    getMessage(request :IRequest): Promise<IResponse>;
}