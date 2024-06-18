import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lecture } from "src/database/entities/lecture.entity";
import { Repository } from "typeorm";

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private lecturesRepo: Repository<Lecture>,
  ) {}
  async findAllLectures(filters: string) {
    return 'OK';
  }
}