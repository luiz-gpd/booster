import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('lectures')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('lectures/:userId')
  @UseGuards()
  async getLecturesFromUser(@Param() userId: string): Promise<string> {
    return this.userService.getLecturesFromUser(userId);
  }
}