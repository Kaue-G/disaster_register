import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from'uuid';
import { Disasters } from "../../disasters/entities/Disasters";
import { Occupation } from "./Occupation";

@Entity('users')
class Users {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;
    
    @Column()
    nick_name?: string;
    
    @Column()
    birthday: string;
    
    @Column()
    photo: string;

    @ManyToMany(() => Disasters)
    @JoinTable({
        name: 'users_has_disasters',
        joinColumns: [{ name: 'users_id' }],
        inverseJoinColumns: [{ name: 'disasters_id' }],
    })
    disasters: Disasters[];

    @ManyToMany(() => Occupation)
    @JoinTable({
        name: 'users_has_occupation',
        joinColumns: [{ name: 'users_id' }],
        inverseJoinColumns: [{ name: 'occupation_id' }],
    })
    occupations: Occupation[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Users };
