import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn} from "typeorm";
import { OrderProduct } from "./OrderProduct";
import { Category } from "./Category";
import { Merchant } from "./Merchant";

enum Unity {
kg = "kg",
unit = "unit"

}

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id_product: number;

    @Column()
    name : string;

    @Column("text")
    description: string;

    @Column("enum",{enum : Unity})
    measure : Unity;

    @OneToMany(type => OrderProduct, order_product => order_product.product)
    order_products: OrderProduct[];

    @ManyToOne(type => Category, cat => cat.products)
    @JoinColumn({ name: "id_category" })
    category: Category;

    @ManyToMany(type => Merchant, merchant => merchant.products)
    merchants : Merchant[];



}
