import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';
import { Users } from "../../users/entities/Users";

@Entity('disasters')
class Disasters {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @Column()
    log_image: string;

    @Column()
    date: Date;

    @ManyToMany(() => Users)
    users: Users[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Disasters };
