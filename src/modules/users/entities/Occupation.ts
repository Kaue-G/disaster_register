import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Users } from "./Users";

@Entity('occupation')
class Occupation {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Users)
    users: Users[];
    
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Occupation };
