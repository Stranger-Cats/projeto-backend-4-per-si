import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Database/Interfaces/book.interface';
import { BookRepository } from 'src/Database/Repository/book.repository';

@Injectable()
export class BooksService {
    constructor(private readonly bookRepository: BookRepository) {}

    async getAllBooks(): Promise<Book[]> {
        const allBooks = await this.bookRepository.getAllBooks();
        if (!allBooks.length)
            throw new BadRequestException('Não existe livros cadastrados!');
        return allBooks;
    }

    async getBookById(bookID: string): Promise<Book> {
        try {
            return await this.bookRepository.getBookById(bookID);
        } catch (err) {
            throw new BadRequestException('Livro não encontrado!', err);
        }
    }

    async saveBook(newBook: BookDTO): Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

    async deleteBookById(bookID: string): Promise<Book> {
        try {
            const existeBook = await this.bookRepository.deleteBookById(bookID);
            if (!existeBook)
                throw new BadRequestException('Livro não existente!');
            return existeBook;
        } catch (err) {
            throw new BadRequestException('Livro não existente!');
        }
    }
}
