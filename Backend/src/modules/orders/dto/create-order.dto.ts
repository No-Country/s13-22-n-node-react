import { IsNotEmpty, IsNumber, IsString, IsUUID} from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    @IsUUID()
    delivery_id: string;

    @IsNotEmpty()
    @IsUUID()
    user_id: string;

    @IsNotEmpty()
    @IsString()
    order_number: string;

    @IsNotEmpty()
    @IsNumber()
    total: number;
}
