import{IsString, IsNumber, IsBoolean, IsEnum, IsArray, isNotEmpty, IsNotEmpty, IsOptional, minLength, MinLength, maxLength, MaxLength} from 'class-validator';
import { Product } from '../entities/product.entity';
import { category } from 'src/modules/category/entities/category.entity';
import { PRODUCT_STATE } from 'src/common/enum/product.enum';


export class CreateProductDto {
    
    @IsNotEmpty()
    @IsString()
    product_names: string

    @IsNotEmpty()
    @IsArray()
    categories:category[]

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

    @IsEnum(PRODUCT_STATE)
    state: PRODUCT_STATE;
}
