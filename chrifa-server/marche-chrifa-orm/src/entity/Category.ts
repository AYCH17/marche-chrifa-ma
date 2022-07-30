import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Product } from "./Product";
import { Merchant } from "./Merchant";


@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id_category: number;

    @Column()
    name: string;

    @Column("int")
    priority: number;

    @Column("text")
    description: string;

    @OneToMany(type => Product, product => product.category)
    products: Product[];

    @OneToMany(type => Merchant, merch => merch.category)
    merchants: Merchant[];


}
