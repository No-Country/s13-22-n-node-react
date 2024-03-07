import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { Order } from '../orders/entities/order.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Delivery) 
    private readonly deliveryReposiroty: Repository<Delivery>,
    @InjectRepository(Order) 
    private readonly orderRepository: Repository<Order>,
    ){}

  async create(orderId: string) {
    const delivery = new Delivery;

    const order = await this.orderRepository.findOne({where: { id: orderId}});

    if (!order) throw new BadRequestException(`Order associated with Id ${orderId} does not exist`)

    delivery.order = order;

    await this.deliveryReposiroty.save(delivery);
    
    return delivery;

  }

  async findAll({ limit=20, offset=0 }: PaginationDto) {
    const deliveries = await this.deliveryReposiroty.find({
      relations: ['order'],
      take: limit,
      skip: offset,
    });
    return deliveries;
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }


  async update(id: string, updateDeliveryDto: UpdateDeliveryDto): Promise<string> {
    const delivery = await this.deliveryReposiroty.findOneByOrFail({ id });
    Object.assign(delivery, updateDeliveryDto);
    await this.deliveryReposiroty.save(delivery);
    return `La orden ha cambiado su estado a ${delivery.status}`;
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}
