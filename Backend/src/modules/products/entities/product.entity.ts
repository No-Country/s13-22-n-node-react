import { join } from "path";
import{BaseEntity} from "src/common/entity/base.entity";
import { PRODUCT_STATE } from "src/common/enum/product.enum";
import { category } from "src/modules/category/entities/category.entity";
import{ Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne }from"typeorm";




@Entity()
export class Product extends BaseEntity {

    @Column()
    product_name: string

    
    @ManyToMany(()=>category, {eager:true, cascade:true} )
    @JoinTable(
        {name:"product_category"}
    )
    categories: category[];
    

    @Column()
    price: number;

    @Column()
    Discount_rate: number;

    @Column()
    Discount:boolean;

    @Column()
    Description: string;

    @Column()
    state: PRODUCT_STATE;

}
