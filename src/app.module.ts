import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { LectureModule } from './lectures/lecture.module';

@Module({
  imports: [
    UserModule,
    LectureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
