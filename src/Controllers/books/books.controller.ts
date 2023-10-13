import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
} from '@nestjs/common';

import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Database/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return await this.bookService.getAllBooks();
    }

    @Get(':bookID')
    async getBookById(@Param('bookID') bookID: string): Promise<Book> {
        return await this.bookService.getBookById(bookID);
    }

    @Get('author/:authorName')
    async getBookByAuthorName(
        @Param('authorName') authorName: string,
    ): Promise<Book[]> {
        return await this.bookService.getBookByAuthorName(authorName);
    }

    @Get('name/:bookName')
    async getBookByName(@Param('bookName') bookName: string): Promise<Book[]> {
        return await this.bookService.getBookByName(bookName);
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<Book> {
        return await this.bookService.saveBook(newBook);
    }

    @Patch(':BookID')
    async updateBookById(
        @Param('BookID') bookID: string,
        @Body() newBook: BookDTO,
    ): Promise<Book> {
        return this.bookService.updateBookById(bookID, newBook);
    }

    @Delete(':bookID')
    async deleteBookById(@Param('bookID') bookID: string): Promise<Book> {
        return await this.bookService.deleteBookById(bookID);
    }
}
