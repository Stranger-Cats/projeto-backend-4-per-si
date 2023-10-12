import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Database/Interfaces/book.interface';
import { BookRepository } from 'src/Database/Repository/book.repository';

@Injectable()
export class BooksService {
    constructor(private readonly bookRepository: BookRepository) {}

    async saveBook(newBook: BookDTO): Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }
}
