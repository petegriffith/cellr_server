import 'dotenv/config';
const devConfig = {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
        host: '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB_NAME,
    },
    migrations: {
        tableName: 'migrations',
        directory: './server/database/migrations',
    },
    seeds: {
        directory: './server/database/seeds',
    },
};
export default devConfig;
