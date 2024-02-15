import { BaseEntity } from "src/common/entity/base.entity";
import { Column, Entity } from "typeorm";


@Entity()
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
}
