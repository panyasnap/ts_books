import {Connection, HydratedDocument, Model, QueryWithHelpers} from "mongoose";
import {Book, BookDocument} from "../schemas/book.schema";
import {Comm, CommDocument} from "../schemas/comm.schema";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";

export class CommService {
    constructor(
        @InjectModel(Comm.name) private CommModel: Model<CommDocument>,
        @InjectConnection() private connection: Connection,) {
    }

    findAllBookComment(bookId: string): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.CommModel.findOne({bookId: bookId})
    }

    addComment(data: Comm) {
        const comm = new this.CommModel(data)
        return comm.save()
    }
}