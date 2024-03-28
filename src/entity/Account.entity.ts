import { Column, Entity, Index, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'
import bcrypt from "bcrypt";

@Entity()
export class Account extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    userName: string;

    @Index()
    @Column()
    email: string;

 
    @Column()
    password: string;

    @Column()
    salt: string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            const saltRounds = 10; 
            this.salt = await bcrypt.genSalt(saltRounds);
            this.password = await bcrypt.hash(this.password, this.salt);
        }
    }

    async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}