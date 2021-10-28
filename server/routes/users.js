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
routes.get('/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;
        const user = await db('users').where('id', user_id).first();
        res.status(200).send(user);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.post('/', async (req, res) => {
    const newUser = req.body;
    try {
        await db('wines').insert(newUser);
        res.status(204).end();
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
