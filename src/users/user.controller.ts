import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { Lecture } from "src/database/entities/lecture.entity";

@Controller('lectures')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('lectures/:userId')
  @UseGuards()
  async getLecturesFromUser(@Param() userId: number): Promise<Lecture[]> {
    return this.userService.getLecturesFromUser(userId);
  }
}