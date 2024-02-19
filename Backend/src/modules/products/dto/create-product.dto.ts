import{IsString, IsNumber, IsBoolean, IsEnum, IsArray, IsNotEmpty, IsOptional, MinLength, MaxLength} from 'class-validator';
import { Category } from 'src/modules/category/entities/category.entity';
import { PRODUCT_STATE } from 'src/common/enum/product.enum';
import { Image } from '../entities/image.entity';


export class CreateProductDto {
    
    @IsNotEmpty()
    @IsString()
    product_names: string

    @IsNotEmpty()
    @IsArray()
    categories:Category[]

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    Discount_rate: number;

    @IsOptional()
    @IsBoolean()
    Discount:boolean;

    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    @MaxLength(100)
    Description: string;

    @IsNotEmpty()
    @IsArray()
    images: Image[]

    @IsEnum(PRODUCT_STATE)
    state: PRODUCT_STATE;
}
