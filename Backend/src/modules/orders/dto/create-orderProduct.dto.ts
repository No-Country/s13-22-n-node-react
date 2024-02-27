import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsPositive, IsString, IsUUID, isPositive} from 'class-validator';
import { Product } from 'src/modules/products/entities/product.entity';
import { Order } from '../entities/order.entity';


export class CreateOrderProductDto{
   
    @IsNotEmpty()
    @IsObject()
    product: Product;

    @IsNotEmpty()
    @IsObject()
    order_id: Order;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    quantity: number

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()    
    price: number

    @IsOptional()
    @IsNumber()
    @IsPositive()
    discount_rate?: number

    @IsNotEmpty()
    @IsBoolean()
    discount: boolean

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    total_Item: number

    
}
