import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../../common/entity/base.entity";

@Entity("images")
export class Image extends BaseEntity {
    @Column()
    url: string

    @Column({default: "Imagen sin nombrar"})
    name: string

    @Column({default: true})
    isActive: boolean
}