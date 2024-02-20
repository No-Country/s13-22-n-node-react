import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, ValidateNested } from 'class-validator';

class ProductDto {
    @IsNotEmpty()
    productId: string;
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