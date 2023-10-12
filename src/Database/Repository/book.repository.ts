import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../Interfaces/book.interface';

@Injectable()
export class BookRepository {
    constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

    saveBook(newBook: BookDTO) {
        const saveBook = new this.bookModel(newBook);
        return saveBook.save();
    }
}
