import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User"

@Entity()
export class Report {

    @PrimaryGeneratedColumn()
    id_report: number;

    @Column()
    time: Date;

    @Column("text")
    text: string;

    @ManyToOne(type => User, user => user.reports)
    @JoinColumn({ name: "id_user" })
    user: User;

}
