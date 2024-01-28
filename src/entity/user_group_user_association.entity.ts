import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserGroupUserAssociation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index("ugua-uid")
    user_id: number;

    @Column()
    @Index("ugua-ugid")
    user_group_id: number;
  
    @Column()
    created_user: string;
    
    @Column()
    created_system: string;    

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}