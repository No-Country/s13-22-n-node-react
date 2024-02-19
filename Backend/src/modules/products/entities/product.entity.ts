import{BaseEntity} from "src/common/entity/base.entity";
import { PRODUCT_STATE } from "src/common/enum/product.enum";
import { Category } from "src/modules/category/entities/category.entity";
import{ Column, Entity, JoinTable, ManyToMany}from"typeorm";
import { Image } from "./image.entity";

@Entity("products")
export class Product extends BaseEntity {

    @Column()
    product_name: string

    
    @ManyToMany(()=>Category, {eager:true, cascade:true} )
    @JoinTable(
        {name:"product_category"}
    )
    categories: Category[];

    @Column()
    price: number;

    @Column()
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

    @Column()
    state: PRODUCT_STATE;

}
