import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { CreateOrderProductDto } from "./dto/create-orderProduct.dto";
import { Product } from "../products/entities/product.entity";
import { Order } from "./entities/order.entity";
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