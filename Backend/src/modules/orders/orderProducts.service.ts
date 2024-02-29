import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderProductDto } from "./dto/create-orderProduct.dto";
import { OrderProductEntity } from "./entities/order_products.entity";

@Injectable()
export class OrderProductService{
    constructor(
        @InjectRepository(OrderProductEntity)
        private readonly orderProductRepository : Repository<OrderProductEntity>
    ){}

    async create(createOrderProductDto: CreateOrderProductDto[]){

        const orderProduct = this.orderProductRepository.create(createOrderProductDto);
        
        return await this.orderProductRepository.save(orderProduct);
    }
}