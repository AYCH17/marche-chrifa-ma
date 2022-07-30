import {Entity,Index, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Merchant } from "./Merchant";
import { User } from "./User";


enum Sender {
  user="user",
  merchant="merchant"
}

console.log(Sender);


@Entity()
//@Index((relation: Message) => [relation.user, relation.merchant], { unique: true })

export class Message {

  @PrimaryGeneratedColumn()
  public readonly id_message : number;

  @ManyToOne(type => User, u => u.messages)
  @JoinColumn({ name: "id_user" })
  user: User;

  @ManyToOne(type => Merchant, merch => merch.messages)
  @JoinColumn({ name: "id_merchant" })
  merchant: Merchant;

    @Column()
    time: Date;

    @Column("text")
    text: string;

    @Column("enum", { enum : Sender })
    sender: Sender;



}
