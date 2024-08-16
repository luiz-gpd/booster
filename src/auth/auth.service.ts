import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { decode } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { AccessTokenDto } from './dto/access-token.dto';
import { User } from 'src/database/entities/users.entity';
import { PRIVATE_KEY } from 'src/helpers/constants/keys';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async login(credentials: LoginDto): Promise<AccessTokenDto> {
    const { login, password } = credentials;
    const user = await this.usersRepo.findOne(
      { where: { login } }
    );;

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await this.validateUserPassword(user, password);

    return await this.generateAccessToken(user);
  }

  private async validateUserPassword(user: User, password: string) {
    await this.validatePassword(user, password);
  }

  private async validatePassword(user: User, password: string) {
    // const valid = user.validPassword(password);
    const valid = true
    if (!valid) {
      throw new Error('Usuário não encontrado');
    }
  }

  generateToken(userId: string, expiresIn: string | number): string {
    const token = jwt.sign({ sub: userId }, PRIVATE_KEY, {
      expiresIn: expiresIn,
      algorithm: 'RS256',
    });
    return token;
  }

  private async generateAccessToken(user: User): Promise<AccessTokenDto> {
    const accessToken = '123'//user.generateToken();
    const { exp, iat } = decode(accessToken) as any;
    const expirationDate = new Date(exp * 1000);
    const issueDate = new Date(iat * 1000);

    return {
      accessToken,
      issuedAt: issueDate.toISOString(),
      expiresAt: expirationDate.toISOString(),
      user: {
        ...user,
        // permissions: user.permissions,
        // advisorProsecutor: user.advisorProsecutor
        //   ? {
        //       id: user.advisorProsecutor.id,
        //       name: user.advisorProsecutor.name,
        //       email: user.advisorProsecutor.email,
        //       prosecutorOffices: user.prosecutorOffices,
        //     }
        //   : undefined,
      },
      authType: 'Bearer',
    };
  }
}
