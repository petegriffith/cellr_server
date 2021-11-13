import express from 'express';
import 'dotenv/config';
import db from './knex.js';
import cellrs from './routes/cellrs.js';
import users from './routes/users.js';
import wines from './routes/wines.js';
import encounters from './routes/encounters.js';
import cors from 'cors';
const port = process.env.PORT || 3000;
export default async () => {
    // Initialize express
    const app = express();
    // migrations and seeds
    console.log('running migrations');
    await db.migrate.latest();
    if (process.env.NODE_ENV === 'development') {
        console.log('running seeds');
        await db.seed.run();
    }
    //Middleware
    app.use(express.json());
    app.use(cors({
        origin: 'TEST',
    }));
    // API routes
    app.use('/cellrs', cellrs);
    app.use('/users', users);
    app.use('/wines', wines);
    app.use('/encounters', encounters);
    app.listen(port, () => {
        console.log('app listening at port: ', port);
    });
};
