import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/all', async (req, res) => {
    try {
        const users = await db('users');
        res.status(200).send(users);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
