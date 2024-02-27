import { MessageController } from "./controller/MessageController";
import { connection } from "./models/connection";
import { MessageRepository } from "./repository/MessageRepository";
import { MessageServices } from "./servicio/MessageServices";


const context = new connection();
const repository = new MessageRepository(context);
const service = new MessageServices(repository);

export const post = async (request: any) => {

    return await new MessageController(service).getMessage(request.body);
};