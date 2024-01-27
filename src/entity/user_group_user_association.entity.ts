import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

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

}