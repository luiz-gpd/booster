import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  INCOMING_LECTURE_CRON,
  SYSTEM_TIMEZONE,
  PRIVATE_KEY_BASE64,
  PUBLIC_KEY_BASE64,
} = process.env;

export {
  PORT,
  INCOMING_LECTURE_CRON,
  SYSTEM_TIMEZONE,
  PRIVATE_KEY_BASE64,
  PUBLIC_KEY_BASE64,
};
