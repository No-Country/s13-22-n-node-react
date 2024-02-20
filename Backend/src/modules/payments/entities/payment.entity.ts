import { BaseEntity } from "src/common/entity/base.entity";
import { PAYMENT_STATE } from "src/common/enum/payment.enum";
import { Entity, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "src/modules/orders/entities/order.entity";
import { User } from "src/modules/users/entities/user.entity";

@Entity("payments")
export class Payment extends BaseEntity {

    @Column({default: "USD"})
    current: string

    @Column()
    payer_name: string

    @Column({type:'decimal', precision: 10, scale: 2})
    quantity: number

    @Column({type:'decimal', precision: 10, scale: 2})
    amount: number

    @ManyToOne(() => User, (user => user.payments))
    @JoinColumn({name: "user_id"})
    userId: string

    @OneToOne(()=> Order, (order => order.paymentId))
    @JoinColumn({name: "delivery_id"})
    orderId: string

    @Column({
        type: "enum",
        enum: PAYMENT_STATE,
        default: PAYMENT_STATE.PENDING
    })
    state: PAYMENT_STATE
}
