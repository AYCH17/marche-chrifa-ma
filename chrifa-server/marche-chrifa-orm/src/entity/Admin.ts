import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Admin {

    @PrimaryColumn()
    username : string;

    @Column()
    email: string;

    @Column()
    password: string;



}
