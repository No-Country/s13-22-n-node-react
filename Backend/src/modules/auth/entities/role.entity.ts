import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";
import { ERole } from "../../../common/enum";

@Entity('roles')
export class Role extends BaseEntity{

    @Column({
        unique: true,
        nullable: false,
    })
    name: ERole;

}
