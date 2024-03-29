import { BaseEntity } from "src/common/entity/base.entity";
import { ORDER_STATE } from "src/common/enum/order.enum";
import { Delivery } from "src/modules/delivery/entities/delivery.entity";
import { Product } from "src/modules/products/entities/product.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Entity, Column, OneToOne, JoinColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { OrderProductEntity} from "./order_products.entity";
import { Payment } from "../../../modules/payments/entities/payment.entity";

@Entity("orders")
export class Order extends BaseEntity{

    @Column({
        type: "enum",
        enum: ORDER_STATE,
        default: ORDER_STATE.PENDING
    })
    state: ORDER_STATE

    @Column()
    order_number: string

    @Column({
        type: "double precision",
    })
    total: number

    @ManyToOne(() => User, (user => user.orders))
    @JoinColumn({name: "user_id"})
    userId: User

    @OneToOne(() => Payment, (payment) => payment.orderId)
    paymentId: Payment;

    @OneToOne(()=> Delivery, (delivery => delivery.order))
    @JoinColumn({name: "delivery_id"})
    deliveryId: Delivery

    @OneToMany(()=>OrderProductEntity, (order_products)=> order_products.order_id, {eager:true, cascade:true})
    items:OrderProductEntity[]
}
