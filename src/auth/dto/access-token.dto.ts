import { User as UserEntity } from '../../database/entities/users.entity'
import { CustomerConfigDto } from './customer-config.dto';

type User = Omit<
  UserEntity,
  'advisorProsecutor' | 'password' | 'toJSON' | 'generateToken' | 'validPassword'
> & {
  advisorProsecutor?: Partial<UserEntity>;
};

export class AccessTokenDto {
  accessToken: string;
  issuedAt: string;
  expiresAt: string;
  user: User;
  termsOfUse?: {
    id?: string;
    path?: string;
  };
  authType: string;
  customerConfig?: CustomerConfigDto;
}
