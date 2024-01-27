import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class FriendConnection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index("fc-uid")
  user_id: number;

  @Column()
  @Index("fc-fuid")
  friend_user_id: number;

  @Column()
  created_user: string;
  
  @Column()
  created_system: string;
}
