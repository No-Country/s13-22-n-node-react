import { Entity, Column, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

import { BaseEntity } from "../../../common/entity/base.entity";
import { ORDER_STATE } from "../../../common/enum/order.enum";
import { Delivery } from "../../../modules/delivery/entities/delivery.entity";
import { User } from "../../../modules/users/entities/user.entity";
import { Product } from "../../../modules/products/entities/product.entity";
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

    @ManyToMany(()=>Product, {cascade:true, eager:true}  )
    @JoinTable(
        {name:"product_orders"}
    )
    items: Product[];

    @ManyToOne(() => User, (user => user.orders))
    @JoinColumn({name: "user_id"})
    userId: User

    @OneToOne(() => Payment, (payment) => payment.orderId)
    @JoinColumn( {name: "payment_id"})
    paymentId: string;

    @OneToOne(()=> Delivery, (delivery => delivery.order))
    @JoinColumn({name: "delivery_id"})
    deliveryId: Delivery
}
