import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecture } from 'src/database/entities/lecture.entity';
import { LectureController } from './lecture.controller';
import { LectureService } from './lecture.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lecture]),
  ],
  controllers: [LectureController],
  providers: [LectureService],
})
export class LectureModule {}
