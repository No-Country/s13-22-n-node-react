import { BaseEntity } from "src/common/entity/base.entity";
import { PAYMENT_STATE } from "src/common/enum/payment.enum";
import { Entity, Column } from "typeorm";

@Entity("payments")
export class Payment extends BaseEntity {

    @Column()
    current: string

    @Column()
    payer_name: string

    @Column({type:'decimal', precision: 10, scale: 2})
    quantity: number

    @Column({type:'decimal', precision: 10, scale: 2})
    amount: number

    @Column({
        type: "enum",
        enum: PAYMENT_STATE,
        default: PAYMENT_STATE.PENDING
    })
    state: PAYMENT_STATE
}
