import{IsString, IsNumber, IsBoolean, IsEnum, IsArray, IsNotEmpty, IsOptional, MinLength, MaxLength} from 'class-validator';
import { Category } from 'src/modules/category/entities/category.entity';
import { PRODUCT_STATE } from 'src/common/enum/product.enum';

export class CreateProductDto {
    
    @IsNotEmpty()
    @IsString()
    product_name: string

    @IsNotEmpty()
    @IsArray()
    categories:string[]

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsNumber()
    discount_rate: number;

    @IsOptional()
    @IsBoolean()
    discount:boolean;

    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    @MaxLength(100)
    description: string;

    @IsOptional()
    @IsArray()
    image?: string

    @IsOptional()
    @IsEnum(PRODUCT_STATE)
    state?: PRODUCT_STATE;
}
