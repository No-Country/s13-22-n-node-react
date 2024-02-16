import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsString()
    phone: string; 

    @IsOptional()
    @IsString()
    image?: string;

}
