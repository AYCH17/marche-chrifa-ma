import {Entity,Index, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";


@Entity()
@Index((relation: OrderProduct) => [relation.order, relation.product], { unique: true })

export class OrderProduct {

  @PrimaryGeneratedColumn()
  public readonly id_order_product: number;

   @ManyToOne(type => Order , order => order.order_products)
   @JoinColumn({ name: "id_order" })
    order : Order;

    @ManyToOne(type => Product , product => product.order_products)
    @JoinColumn({ name: "id_product" })
    product : Product;

    @Column({
      type : "decimal",
      precision : 5,
      scale : 2
    })
    quantity: number;

}
