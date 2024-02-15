import { BaseEntity } from "src/common/entity/base.entity";
import { Role } from "src/modules/auth/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";


@Entity('users')
export class User extends BaseEntity {
    
    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        nullable: true,
        select: false,
    })
    password?: string

    @Column({
        nullable: true
    })
    address?: string

    @Column({
        nullable: true,
    })
    image?: string;

    @Column()
    phone: string;

    @ManyToOne(() => Role, (role) => role.name, {
        nullable: false
    })
    @JoinColumn({
      name: 'role',
      referencedColumnName: 'name',
    })
    @Column({
        select: true,
    })
    role: string;
}
