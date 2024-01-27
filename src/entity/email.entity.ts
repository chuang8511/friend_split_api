import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index("e-uid")
  user_id: number;

  @Column()
  @Index("e-a")
  address: string;

  @Column()
  created_user: string;
  
  @Column()
  created_system: string;
}
