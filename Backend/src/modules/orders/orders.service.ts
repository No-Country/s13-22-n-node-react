import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/user.entity';
import { DeliveryService } from '../delivery/delivery.service';
import { OrderProductService } from './orderProducts.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly deliveryService: DeliveryService,
    @Inject('ORDER_PRODUCT_SERVICE') private readonly orderProductService: OrderProductService,
    @Inject('PRODUCT_SERVICE') private readonly productService: ProductsService,  
    ) {}

  async create(createOrderDto: CreateOrderDto) {
    
    const user = await this.userRepository.findOneBy({ id:createOrderDto.userId});

    if (!user) throw new NotFoundException('Usuario no Encontrado, por favor registrese');
    
    const order =  this.orderRepository.create({...createOrderDto, userId:user, items:[]});
    let items= [];
    for (const item of createOrderDto.items) {
      const product = await this.productService.findOne(item.product)
      items.push({...item, product, order}) 
    
    }
    
    await this.orderProductService.create(items);
    //order.deliveryId = await this.deliveryService.create(order.id)
     
    await this.orderRepository.save(order);

    return {
      message: `La orden numero: ${createOrderDto.order_number} ha sido creada con exito`,
      order: order,
    };
  }

  async findAll() {
    const orders = await this.orderRepository.find({
      relations: ["userId", "deliveryId"],
    });
    return orders;
  }

  async findOne(id: string) {
    const order = await this.orderRepository.find({
      where: { id },
      relations: ["userId", "deliveryId"],
    });

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<string> {
    const order = await this.orderRepository.findOneByOrFail({ id });
    Object.assign(order, updateOrderDto);
    await this.orderRepository.save(order);
    return `La orden ha cambiado su estado a ${order.state}`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
