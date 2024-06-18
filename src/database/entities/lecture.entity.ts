import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Speaker } from './speaker.entity';
import { User } from './users.entity';

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  time: String;

  @Column({ default: true })
  isOnline: String;

  @Column({ nullable: true })
  place?: String;

  @Column({ nullable: true })
  theme?: String;

  @ManyToMany(() => Speaker)
  @JoinTable()
  speaker: Speaker[];

  @ManyToMany(() => Speaker)
  @JoinTable()
  attendee: User[];
}
