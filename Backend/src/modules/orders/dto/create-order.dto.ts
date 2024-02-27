import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, ValidateNested, isNotEmpty } from 'class-validator';

class ProductDto {
    @IsNotEmpty()
    productId: string;
    @IsNotEmpty()
    item_quantity: number

  }

export class CreateOrderDto {

    @IsNotEmpty()
    @IsUUID()
    user_id: string;

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductDto)
    items: ProductDto[];

    @IsNotEmpty()
    @IsString()
    order_number: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;
}