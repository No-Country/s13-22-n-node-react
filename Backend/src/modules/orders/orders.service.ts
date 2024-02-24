import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";
import { User } from "../users/entities/user.entity";
import { DeliveryService } from "../delivery/delivery.service";
import { Product } from "../products/entities/product.entity";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly deliveryService: DeliveryService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const id = createOrderDto.user_id;
    const user = await this.userRepository.findOneBy({ id });
    let items = [];
    createOrderDto.items.map(async (item) => {
      const id = item.productId;
      const itemfull = await this.productRepository.findOneBy({ id });
      items.push(itemfull)
      console.log(itemfull)
    });
    if (!user) throw new Error("Usuario no Encontrado, por favor registrese");
    const order = new Order();
    order.userId = user;
    order.items = items;
    order.order_number = createOrderDto.order_number;
    order.total = createOrderDto.amount;
    order.deliveryId = await this.deliveryService.create(order.id);

    await this.orderRepository.save(order);

    return {
      message: `La orden numero: ${createOrderDto.order_number} ha sido creada con exito`,
      order: order,
    };
  }

  async findAll({ limit=20, offset=0 }: PaginationDto) {
    const orders = await this.orderRepository.find({
      relations: ["userId", "deliveryId"],
      take: limit,
      skip: offset
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
