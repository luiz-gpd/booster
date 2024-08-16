import { Body, Controller, Get, Put } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { QueueDataDto } from './dto/queue-data.dto';
import { QueuesFiltersDto } from './dto/queues-filters.dto';

@Controller('queues')
export class QueuesController {
  constructor(private queuesService: QueuesService) {}

  @Get()
  getAllQueues(): Promise<QueueDataDto[]> {
    return this.queuesService.getAllQueues();
  }

  @Put('pause')
  pauseQueues(@Body() filters: QueuesFiltersDto): Promise<void> {
    return this.queuesService.pauseQueues(filters);
  }

  @Put('resume')
  resumeQueues(@Body() filters: QueuesFiltersDto): Promise<void> {
    return this.queuesService.resumeQueues(filters);
  }
}
