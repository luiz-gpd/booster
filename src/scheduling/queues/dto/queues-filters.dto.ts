import { IsOptional, IsString } from "class-validator";

export class QueuesFiltersDto {
  @IsOptional()
  @IsString({ each: true })
  names?: string[];
}
