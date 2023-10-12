import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

import { BookDTO } from 'src/DTO/books.dto';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) {}

    @Get()
    getAllBooks(): string {
        return 'meus livros!';
    }

    @Post()
    saveBook(@Body() newBook: BookDTO): BookDTO {
        return this.bookService.saveBook(newBook);
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
