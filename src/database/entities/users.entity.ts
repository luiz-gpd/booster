import { UserTypes } from 'src/helpers/enums/user-types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  login: string;

  @Column({ unique: true, nullable: false })
  passwordHash: string;

  @Column({ nullable: false, default: UserTypes.BASIC })
  type: UserTypes
}
