import { UserTypes } from 'src/helpers/enums/user-types';
import { ChildEntity, OneToMany } from 'typeorm';
import { User } from './users.entity';

@ChildEntity(UserTypes.SPEAKER)
export class Speaker extends User {}