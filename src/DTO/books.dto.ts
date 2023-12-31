import {
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
    IsPositive,
    ArrayMinSize,
    IsNotEmptyObject,
    ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import { AuthorDTO } from './author.dto';

export class BookDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    readonly name: string;

    @IsNotEmpty()
    @Type(() => AuthorDTO)
    @ArrayMinSize(1)
    @IsNotEmptyObject({}, { each: true })
    @ValidateNested({ each: true })
    readonly author: AuthorDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    readonly language: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly releaseYear: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    readonly publisher: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly pages: number;
}
