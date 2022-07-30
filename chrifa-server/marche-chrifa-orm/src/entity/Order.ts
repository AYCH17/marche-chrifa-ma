import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from "typeorm";
import {User} from "./User"
import {Merchant} from "./Merchant"
import {OrderProduct} from "./OrderProduct"


@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id_order: number;

    @Column()
    time: Date;

    @ManyToOne(type => User, user => user.orders)
    @JoinColumn({ name: "id_user" })
    user: User;

    @ManyToOne(type => Merchant, merchant => merchant.orders)
    @JoinColumn({ name: "id_merchant" })
    merchant: Merchant;

    @OneToMany(type => OrderProduct, order_product => order_product.order)
    order_products: OrderProduct[];

}
