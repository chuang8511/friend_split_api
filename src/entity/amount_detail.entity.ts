import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AmountDetail {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Index()
    @Column()
    user_group_id: number;

    @Column()
    amount_paid: number;

    @Column()
    created_user: string;
    
    @Column()
    created_system: string;    

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}