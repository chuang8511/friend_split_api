import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
