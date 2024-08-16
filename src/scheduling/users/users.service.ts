import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Queue } from 'bull';
import { INCOMING_LECTURE_CRON, SYSTEM_TIMEZONE } from 'src/config/env';
import { USER_JOBS, USER_QUEUE } from './users.constants';
import { QueuesService } from '../queues/queues.service';

@Injectable()
export class UsersCronService {
  constructor(
    @InjectQueue(USER_QUEUE)
    private usersQueue: Queue,
    queuesService: QueuesService,
  ) {
    queuesService.registerQueues([usersQueue]);
  }

  @Cron(INCOMING_LECTURE_CRON, { timeZone: SYSTEM_TIMEZONE })
  async calculateBalance() {
    const jobId = this.currentJobId;
    const existentJob = await this.usersQueue.getJob(jobId);
    if (existentJob) return;
    await this.usersQueue.add(
      USER_JOBS.INCOMING_LECTURE,
      {},
      {
        jobId,
      },
    );
  }

  private get currentJobId(): string {
    const currentTimestamp = Date.now();
    const index = Math.floor(currentTimestamp / 60000);
    return `${SYSTEM_TIMEZONE}-${INCOMING_LECTURE_CRON}-${index}`;
  }
}
