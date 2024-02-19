import { BaseEntity } from "src/common/entity/base.entity";
import { Column, Entity } from "typeorm";

@Entity("images")
export class Image extends BaseEntity {
    @Column()
    url: string

    @Column({default: "Imagen sin nombrar"})
    name: string

    @Column({default: true})
    isActive: boolean
}