import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Report} from "./Report"
import {Order} from "./Order"
import {Message} from "./Message"


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id_user: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;


    @Column({
      length : 10
    })
    mobile: string;

    @Column("text")
    adresse: string;

    @Column("date")
    subscription_date: Date;

    @Column()
    last_session: Date;

    @OneToMany(type => Message, mes => mes.user)
    messages: Message[];


    @OneToMany(type => Order, order => order.user)
    orders: Order[];

    @OneToMany(type => Report, report => report.user)
    reports: Report[];
}
