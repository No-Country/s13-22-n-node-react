import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "../../../modules/products/entities/product.entity";
import { Order } from "./order.entity";
import { BaseEntity } from "../../../common/entity/base.entity";

@Entity("orders_product")
export class OrderProductEntity extends BaseEntity{
    
    @ManyToOne(()=>Product,(product)=> product.order,{eager:true, cascade:true} )
    @JoinColumn()
    product: Product;

    @ManyToOne(()=>Order, (order)=> order.items, {eager:true, cascade:true} )
    @JoinColumn()
    order_id:Order;

    @Column()
    quantity: number

    @Column()
    price: number

    @Column({default:0})
    discount_rate: number

    @Column()
    discount: boolean

    @Column()
    total_Item: number
}