import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";
import { User } from "../users/entities/user.entity";
import { DeliveryService } from "../delivery/delivery.service";
import { Product } from "../products/entities/product.entity";
import { Payment } from "../payments/entities/payment.entity";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly deliveryService: DeliveryService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const id = createOrderDto.user_id;
    const user = await this.userRepository.findOneBy({ id });
    let items = [];
    createOrderDto.items.map(async (item) => {
      const id = item.productId;
      const itemfull = await this.productRepository.findOneBy({ id });
      items.push(itemfull);
    });
    if (!user) throw new Error("Usuario no Encontrado, por favor registrese");
    const order = new Order();
    order.userId = user;
    order.items = items;
    order.order_number = createOrderDto.order_number;
    order.total = createOrderDto.amount;
    order.deliveryId = await this.deliveryService.create(order.id);
    await this.orderRepository.save(order);
    
    const payment = new Payment();
    payment.payer_name = user.name + " " + user.last_name;
    payment.quantity = items.length;
    payment.amount = order.total;
    payment.userId = user;
    payment.orderId = order;

    await this.paymentRepository.save(payment);
    order.paymentId = payment.id;
    await this.orderRepository.save(order);

    return {
      message: `La orden numero: ${createOrderDto.order_number} ha sido creada con exito`,
      order: order,
    };
  }

  async findAll() {
    const orders = await this.orderRepository.find({
      relations: ["userId", "deliveryId", "paymentId"],
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
