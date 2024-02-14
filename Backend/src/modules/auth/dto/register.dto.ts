import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    password?: string;

    @IsString()
    address?: string;

    @IsString()
    image?: string;

    @IsString()
    refreshToken?: string;
}
