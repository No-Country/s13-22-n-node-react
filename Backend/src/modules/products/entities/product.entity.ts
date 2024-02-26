import{ Column, Entity, JoinColumn, JoinTable, ManyToMany}from"typeorm";

import{BaseEntity} from "../../../common/entity/base.entity";
import { PRODUCT_STATE } from "../../../common/enum/product.enum";
import { Category } from "../../../modules/category/entities/category.entity";
import { Image } from "./image.entity";

@Entity("products")
export class Product extends BaseEntity {

    @Column()
    product_name: string

    
    @ManyToMany(()=>Category, {eager:true, cascade:true} )
    @JoinTable(
        {name:"product_category"}
    )
    @JoinColumn({
        name:"categories",
    })
    categories: Category[];

    @Column({
        type: "double"
    })
    price: number;

    @Column({
        type: "double",
    })
    discount_rate: number;

    @Column()
    discount:boolean;

    @Column()
    description: string;

    @ManyToMany(()=>Image, {eager:true, cascade:true} )
    @JoinTable(
        {name:"product_image"}
    )
    images: Image[];

    @Column({
        default: PRODUCT_STATE.UNPUBLISHED
    })
    state: PRODUCT_STATE;

}
