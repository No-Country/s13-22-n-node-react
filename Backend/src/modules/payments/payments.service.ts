import { Injectable } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
const { MercadoPagoConfig, Preference } = require("mercadopago");
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { Product } from "../products/entities/product.entity";
import { Payment } from "./entities/payment.entity";
import { Order } from "../orders/entities/order.entity";

ConfigModule.forRoot({
  envFilePath: [".env"],
  isGlobal: true,
});

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto)
    const accessToken = process.env.ACCESS_TOKEN;
    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);
    let items = [];
    for (const itemDto of createPaymentDto.items) {
      const productId = itemDto.productId;
      const product = await this.productRepository.findOneBy({ id: productId });
      const unitPrice = product.discount
        ? product.price * (1 - product.discount_rate)
        : product.price;
      const finalItem = {
        id: product.id,
        currency_id: "ARS",
        title: product.product_name,
        picture_url: product.images[0]?.url,
        description: product.description,
        quantity: itemDto.item_quantity,
        unit_price: unitPrice,
      };
      items.push(finalItem);
    }
    const id = createPaymentDto.user_id;
    const user = await this.userRepository.findBy({ id });
    const payer = {
      name: user[0].name + " " + user[0].last_name,
      email: user[0].email,
    };
    
    const result = await preference.create({
      body: {
        items,
        payer,
        back_urls: {
          success: `www.google.com`,
          failure: `www.yahoo.com`,
        },
        auto_return: "approved",
      },
    });
    const response = {
      url: result.init_point,
      pay_id: result.id,
      payer: {
        name: result.payer.name,
        email: result.payer.email,
      },
    };
    await this.paymentRepository.save(createPaymentDto)
    return response;
  }

  findAll() {
    return this.paymentRepository.find({
      relations: ["userId", "orderId", "orderId.deliveryId"],
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
