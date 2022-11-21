import {Body, Controller, Delete, Get, Post} from "@nestjs/common";
import {BookService} from "./book.service";
import {BookItem} from "../data/book.item";
import {Book} from "../interfaces/book.interface";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }
    @Post()
    create(@Body() book: Book) {
        this.bookService.create(book);
    }
    @Post("update")
    update(@Body()id: string, book: Book) {
        this.bookService.update(id, book);
    }
    @Get()
    findAll():Book[]{
        return this.bookService.findAll();
    }
   @Get("id")
    findOne(id: string): Book {
       return this.bookService.findOne(id);
   }
   @Delete("id")
    delete(id: string): string{
        return this.bookService.delete(id)
   }
}