export class QueueDataDto {
  name: string;
  jobCounts: JobCountsDto;
  isPaused: boolean;
}

class JobCountsDto {
  waiting: number;
  active: number;
  completed: number;
  failed: number;
  delayed: number;
}
