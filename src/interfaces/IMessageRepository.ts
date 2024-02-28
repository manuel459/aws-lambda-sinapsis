import { IRequest } from "./IRequest";
import { IRequestInsert } from "./IRequestInsert";
import { IResponse } from "./IResponse";

export interface IMessageRepository {
    getMessage(request :IRequest): Promise<IResponse>;
    insertCampania(request: IRequestInsert): any;
}