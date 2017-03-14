import { Table, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn  } from 'typeorm';
import { User } from './user';

@Table()
export class Environment
{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    host: string;

    @Column()
    note: string;

    @OneToOne(type => User)
    @JoinColumn()
    owner: User;

    @Column()
    isValid: boolean;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}
