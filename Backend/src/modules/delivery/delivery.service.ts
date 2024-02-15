import { Injectable } from '@nestjs/common';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryService {
  @InjectRepository(Delivery) deliveryReposiroty: Repository<Delivery>
  async create(orderId) {
    const delivery = new Delivery
    delivery.order = orderId
    await this.deliveryReposiroty.save(delivery)
    return delivery
  }

  findAll() {
    return `This action returns all delivery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}
