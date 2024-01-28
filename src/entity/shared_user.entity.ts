import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SharedUser {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Index()
    @Column()
    user_id: number;

    @Column()
    amount_shared: number;

    @Column()
    created_user: string;
    
    @Column()
    created_system: string;    

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}