import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/all', async (req, res) => {
    try {
        const cellrs = await db('cellrs');
        res.status(200).send(cellrs);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
