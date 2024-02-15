import { BaseEntity } from "src/common/entity/base.entity";
import { ORDER_STATE } from "src/common/enum/order.enum";
import { Delivery } from "src/modules/delivery/entities/delivery.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";


@Entity("orders")
export class Order extends BaseEntity{

    @Column()
    order_date: Date

    @Column({
        type: "enum",
        enum: ORDER_STATE,
        default: ORDER_STATE.PENDING
    })
    state: ORDER_STATE

    @Column()
    order_number: string

    @Column()
    total: number

    @ManyToOne(() => User, {eager: true})
    @JoinColumn()
    user: User

    @OneToOne(()=> Delivery, (delivery) => delivery.order)
    @JoinColumn()
    delivery: Delivery
}
