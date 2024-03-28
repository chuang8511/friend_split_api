import { Column, Entity, Index, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

@Entity()
export class LoginRecord extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({
        nullable: true
    })
    loginIp: string;

    @Column()
    result: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}