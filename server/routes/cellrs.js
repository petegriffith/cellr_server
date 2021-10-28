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
routes.get('/:cellr_id', async (req, res) => {
    try {
        const { cellr_id } = req.params;
        const cellr = await db('cellrs').where('id', cellr_id).first();
        res.status(200).send(cellr);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
