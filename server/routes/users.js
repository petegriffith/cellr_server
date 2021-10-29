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
routes.get('/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const user = await db('users').where('email', email).first();
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
        await db('users').insert(newUser);
        res.status(200).send(newUser);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
