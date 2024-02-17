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
  async findAll() {
    const deliveries = await this.deliveryReposiroty.find({
      relations: ['order'],
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
