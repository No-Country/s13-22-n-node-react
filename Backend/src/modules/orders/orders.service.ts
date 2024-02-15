import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/user.entity';
import { DeliveryService } from '../delivery/delivery.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly deliveryService: DeliveryService
    ) {}

  async create(createOrderDto: CreateOrderDto) {
    const id = createOrderDto.user_id;
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new Error('Usuario no Encontrado, por favor registrese');
    const order = new Order();
    order.userId = user;
    order.order_number = createOrderDto.order_number;
    order.total = createOrderDto.total;
    order.deliveryId = await this.deliveryService.create(order.id)
    
    await this.orderRepository.save(order);

    return `La orden numero: ${createOrderDto.order_number} ha sido creada con exito`;
  }

  async findAll() {
    const orders = await this.orderRepository.find({
      relations: ['userId', 'deliveryId'],
    });
    return orders;
  }

  async findOne(id: string) {
    const order = await this.orderRepository.find({
      where: { id },
      relations: ['userId', 'deliveryId'],
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
