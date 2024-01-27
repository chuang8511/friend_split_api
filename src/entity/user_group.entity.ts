import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

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

}