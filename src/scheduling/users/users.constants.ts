import { RateLimiter } from 'bull';

export const USER_QUEUE = 'prosecutor-balance';

export enum USER_JOBS {
  INCOMING_LECTURE = 'INCOMING_LECTURE',
}
