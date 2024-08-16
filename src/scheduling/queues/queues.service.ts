import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
// import { setQueues } from 'bull-board';
import { QueueDataDto } from './dto/queue-data.dto';
import { QueuesFiltersDto } from './dto/queues-filters.dto';

@Injectable()
export class QueuesService {
  private queues: Queue[] = [];

  registerQueues(queues: Queue[]): void {
    // setQueues(queues);
    queues.forEach(queue => this.queues.push(queue));
  }

  async getAllQueues(): Promise<QueueDataDto[]> {
    return Promise.all(
      this.queues.map(async queue => ({
        name: queue.name,
        jobCounts: await queue.getJobCounts(),
        isPaused: await queue.isPaused(),
      })),
    );
  }

  async pauseQueues(filters: QueuesFiltersDto): Promise<void> {
    const queuesNames = filters.names;
    if (queuesNames) {
      this.validateQueuesNames(queuesNames);
    }
    const selectedQueues = queuesNames ? this.queues.filter(queue => queuesNames.includes(queue.name)) : this.queues;
    await Promise.all(selectedQueues.map(queue => queue.pause()));
  }

  async resumeQueues(filters: QueuesFiltersDto): Promise<void> {
    const queuesNames = filters.names;
    if (queuesNames) {
      this.validateQueuesNames(queuesNames);
    }
    const selectedQueues = queuesNames ? this.queues.filter(queue => queuesNames.includes(queue.name)) : this.queues;
    await Promise.all(selectedQueues.map(queue => queue.resume()));
  }

  private validateQueuesNames(queuesNames: string[]): void {
    queuesNames.forEach(queueName => this.validateQueueName(queueName));
  }

  private validateQueueName(queueName: string): void {
    if (!this.queues.some(queue => queue.name === queueName)) {
      throw new Error(`Queue "${queueName}" not found`);
    }
  }
}
