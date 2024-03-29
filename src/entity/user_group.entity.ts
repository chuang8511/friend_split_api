import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserGroup {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Index("ug-name")
    @Column()
    name: string;

    @Column()
    created_user: string;
    
    @Column()
    created_system: string;    

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}