import { BaseEntity } from "src/common/entity/base.entity";
import { Order } from "src/modules/orders/entities/order.entity";
import { Column, Entity, OneToMany } from "typeorm";


@Entity("users")
export class User extends BaseEntity {
    
    @Column()
    name: string

    @Column()
    last_name: string

    @Column()
    phone_number: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    address: string

    @Column()
    image: string

    @OneToMany(() => Order, (order) => order.userId)
    orders: Order[]
}
