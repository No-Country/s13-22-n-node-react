import { BaseEntity } from "src/common/entity/base.entity";
import { Column, Entity } from "typeorm";

@Entity("images")
export class Image extends BaseEntity {
    @Column()
    url: string

    @Column()
    name: string

    @Column()
    isActive: boolean
}
