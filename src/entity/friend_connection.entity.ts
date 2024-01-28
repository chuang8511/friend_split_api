import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
