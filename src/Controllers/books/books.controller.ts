import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

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

    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<Book> {
        return await this.bookService.saveBook(newBook);
    }

    @Patch()
    updateBook(): string {
        return 'Livro atualizado!';
    }

    @Delete()
    deleteBook(): string {
        return 'Livro apagado!';
    }
}
