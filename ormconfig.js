const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

module.exports = {
  type: 'postgres',
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: false,
  entities: ['dist/database/entity/**/*.js'],
  migrations: ["dist/database/migrations/**/*.js"],
  synchronize: true,
};
