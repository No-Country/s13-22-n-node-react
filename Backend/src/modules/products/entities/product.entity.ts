import{ Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne}from"typeorm";
import{BaseEntity} from "../../../common/entity/base.entity";
import { PRODUCT_STATE } from "../../../common/enum/product.enum";
import { Category } from "../../../modules/category/entities/category.entity";
import { OrderProductEntity} from "../../../modules/orders/entities/order_products.entity";

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
        type: "double precision",
    })
    price: number;

    @Column({
        type: "double precision",
    })
    discount_rate: number;

    @Column()
    discount:boolean;

    @Column()
    description: string;

    @Column({
        default: PRODUCT_STATE.UNPUBLISHED
    })
    state: PRODUCT_STATE;

    @ManyToOne(()=>OrderProductEntity,(order)=>order.product)
    order: OrderProductEntity[];

}
