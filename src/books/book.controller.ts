import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {BookService} from "./book.service";
import {BookItem} from "../data/book.item";
import {Book} from "../interfaces/book.interface";
import {BookDocument} from "../schemas/book.schema";
import {HydratedDocument, QueryWithHelpers} from "mongoose";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }
    @Post()
   public create(@Body() book: Book) {
        this.bookService.create(book);
    }
    @Put(":id")
    public update(@Param() {id}:Book, @Body() book: Book) {
        this.bookService.update(id, book);
    }
    @Get()
    public findAll():Promise<BookDocument[]>{
        return this.bookService.findAll();
    }
   @Get("id")
   public findOne(id: string): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
       return this.bookService.findOne(id);
   }
   @Delete("id")
   public delete(@Param() {id}:Book): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument>{
        return this.bookService.delete(id)
   }
}