import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index("u-name")
  name: string;

  @Column()
  created_user: string;
  
  @Column()
  created_system: string;
}
