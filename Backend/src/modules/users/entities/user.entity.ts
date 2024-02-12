import { Column, OneToOne } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";


export class User extends BaseEntity {
    
    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    address: string

    @Column()
    image: string

    @Column()
    isActive: boolean
}
