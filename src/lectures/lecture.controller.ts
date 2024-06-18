import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { LectureService } from "./lecture.service";

@Controller('lectures')
export class LectureController {
  constructor(private lectureService: LectureService) {}

  @Get('')
  @UseGuards()
  async getAllLectures(@Query() filters: string): Promise<string> {
    return this.lectureService.findAllLectures(filters);
  }
}