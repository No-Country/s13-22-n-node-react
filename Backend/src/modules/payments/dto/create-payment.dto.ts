import { Type } from "class-transformer";
import { IsArray, ValidateNested, IsNotEmpty, IsNumber, IsString, IsJSON } from "class-validator";

class ProductDto {
    @IsNotEmpty()
    @IsString()
    productId: string

    @IsNotEmpty()
    @IsNumber()
    item_quantity: number
  }

export class CreatePaymentDto {

    @IsNotEmpty()
    @IsString()
    user_id: string

    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @IsNotEmpty()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => ProductDto)
    items: ProductDto[];

    @IsNotEmpty()
    @IsString()
    order_number: string

    @IsNotEmpty()
    @IsNumber()
    amount: number
}
