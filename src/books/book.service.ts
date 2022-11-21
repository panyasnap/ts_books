import {forwardRef, Inject, Injectable} from "@nestjs/common";
import {Book} from "../interfaces/book.interface";


@Injectable()
export class BookService {
    private title: string;
    private description: string;
    private authors: string;
    private favorite: string;
    private fileCover: string;
    constructor() {
    }

    private readonly books: Book[] = []


    create(book: Book) {
        this.books.push(book)
    }

    findAll(): Book[] {
        return this.books;
    }

    findOne(id: string): Book {
        const idx = this.books.findIndex(e => e.id === id)
        return this.books[idx]
    }

    update(id: string, book: Book): Book {
        const idx = this.books.findIndex(e => e.id === id)
        if (idx !== -1) {
            this.books[idx] = {
                ...this.books[idx],
                title :this.title,
                description: this.description,
                authors: this.authors,
                favorite: this.favorite,
                fileCover: this.fileCover
            }
            return this.books[idx]
        }
    }

    delete(id: string) {
        const idx = this.books.findIndex(e => e.id === id)
        if (idx !== -1) {
            this.books.splice(idx, 1)
        }
        return "ok"
    }
}