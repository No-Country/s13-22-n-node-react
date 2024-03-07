import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, isNotEmpty} from 'class-validator';
import { CreateOrderProductDto } from './create-orderProduct.dto';
import { IOrderProduct } from 'src/common/Interface/orderProduct.Interface';

export class CreateOrderDto {

    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @IsNotEmpty()
    @IsString()
    order_number: string;

    @IsNotEmpty()
    @IsNumber()
    total: number;

    @IsNotEmpty()
    @IsArray()
    items?:IOrderProduct[]
}
