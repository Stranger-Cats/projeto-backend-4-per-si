import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class AuthorDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(50)
    readonly surname: string;
}
