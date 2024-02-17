import { IsNotEmpty, IsString, IsUUID} from 'class-validator';

export class CreateDeliveryDto {
@IsNotEmpty()
@IsString()
status: string

@IsNotEmpty()
@IsUUID()
order: string
}