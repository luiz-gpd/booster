const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

module.exports = {
  type: 'postgres',
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  entities: ['dist/**/*.js'],
  // migrations: ["dist/database/migration/**/*.js"],
  sincronize: true,
};
