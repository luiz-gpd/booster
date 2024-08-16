import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { LectureModule } from './lectures/lecture.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from './config/env';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: DB_HOST,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        logging: false,
        entities: ['dist/database/entity/**/*.js'],
        migrations: ["dist/database/migrations/**/*.js"],
        synchronize: true,
      }
    ),
    UserModule,
    LectureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
