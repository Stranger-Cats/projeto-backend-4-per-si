import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../Interfaces/book.interface';

@Injectable()
export class BookRepository {
    constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

    async getAllBooks(): Promise<Book[]> {
        return await this.bookModel
            .find({}, { __v: false })
            .sort({ name: +1 })
            .exec();
    }

    async getBookById(bookID: string): Promise<Book> {
        return await this.bookModel.findById(bookID, { __v: false });
    }

    async saveBook(newBook: BookDTO): Promise<Book> {
        const savedBook = new this.bookModel(newBook);
        return await savedBook.save();
    }

    async deleteBookById(bookID: string): Promise<Book> {
        return await this.bookModel.findOneAndDelete({ _id: bookID });
    }

    async updateBookById(bookID: string, newBook: BookDTO): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate({ _id: bookID }, newBook);
    }

    async getBookByAuthorName(authorName: string[]): Promise<Book[]> {
        return await this.bookModel.find({
            $or: [
                { 'author.name': { $in: authorName } },
                { 'author.subname': { $in: authorName } },
            ],
        });
    }
}
