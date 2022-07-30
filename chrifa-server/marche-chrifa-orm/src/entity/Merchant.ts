import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinTable, JoinColumn} from "typeorm";
import {Order} from "./Order"
import {Product} from "./Product"
import {Category} from "./Category"
import {Message} from "./Message"


@Entity()
export class Merchant {

    @PrimaryGeneratedColumn()
    id_merchant: number;

    @Column()
    username: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
      length : 10
    })    mobile: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
      type : "decimal",
      precision : 3,
      scale : 2
    })
    rating: number;

    @Column()
    number_of_rates: number;

    @OneToMany(type => Order, order => order.merchant)
    orders: Order[];

    @OneToMany(type => Message, mes => mes.merchant)
    messages: Message[];

    @ManyToOne(type => Category, cat => cat.merchants)
    @JoinColumn({ name: "id_category" })
    category: Category;

    @ManyToMany(type => Product, product => product.merchants , {
        cascade: true
    })
    @JoinTable()
    products : Product[];



//

}
