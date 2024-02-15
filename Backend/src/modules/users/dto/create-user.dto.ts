import { IsEmail, IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';
import { ERole } from 'src/common/enum';

export class CreateUserDto {
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

    @IsOptional()
    @IsEnum(ERole)
    role?: ERole;

}
