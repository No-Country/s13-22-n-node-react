import { BaseEntity } from 'src/common/entity/base.entity';
import { DELIVERY_STATE } from 'src/common/enum/delivery.enum';
import { Order } from 'src/modules/orders/entities/order.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity("deliveries")
export class Delivery extends BaseEntity {

  @Column({
    type: 'enum',
    enum: DELIVERY_STATE,
    default: DELIVERY_STATE.PENDING,
  })
  status: DELIVERY_STATE;

  @OneToOne(() => Order, (order) => order.deliveryId)
  order: Order;
}
