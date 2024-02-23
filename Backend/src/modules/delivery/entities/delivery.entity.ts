import { Column, Entity, OneToOne } from 'typeorm';

import { BaseEntity } from '../../../common/entity/base.entity';
import { DELIVERY_STATE } from '../../../common/enum/delivery.enum';
import { Order } from '../../../modules/orders/entities/order.entity';

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
