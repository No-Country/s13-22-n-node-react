import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { CreateOrderProductDto } from './create-orderProduct.dto';

export class UpdateOrderProductDto extends PartialType(CreateOrderProductDto) {}
