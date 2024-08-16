import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/database/entities/users.entity';
import { Lecture } from 'src/database/entities/lecture.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Lecture]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
