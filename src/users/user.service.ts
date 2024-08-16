import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lecture } from "src/database/entities/lecture.entity";
import { User } from "src/database/entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    @InjectRepository(Lecture)
    private lecturesRepo: Repository<Lecture>,
  ) {}
  async getLecturesFromUser(userId: number) {
    return this.lecturesRepo.createQueryBuilder('lecture')
    .leftJoinAndSelect('lecture.attendee', 'attendee')
    .leftJoinAndSelect('lecture.speaker', 'speaker')
    .where('attendee.id = :userId', { userId })
    .orWhere('speaker.id = :userId', { userId })
    .getMany();
  }
}