import { IRequest } from "./IRequest";
import { IRequestInsert } from "./IRequestInsert";
import { IResponse } from "./IResponse";

export interface IMessageServices {
    getMessage(request :IRequest): Promise<IResponse>;
    insertCampania(request: IRequestInsert): Promise<IResponse>;
    getUsuarios(): Promise<IResponse>;
}