import { Product } from "src/modules/products/entities/product.entity";
import { BaseEntity, Column, Entity, Int32, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Order } from "./order.entity";
import { join } from "path";

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