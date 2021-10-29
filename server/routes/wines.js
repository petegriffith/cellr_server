import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/all', async (req, res) => {
    try {
        const wines = await db('wines').where('cellr_id', req.headers.cellr_id);
        res.status(200).send(wines);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.get('/:wine_id', async (req, res) => {
    try {
        const { wine_id } = req.params;
        const wines = await db('wines').where('id', wine_id).first();
        res.status(200).send(wines);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.post('/', async (req, res) => {
    const newWine = req.body;
    try {
        await db('wines').insert(newWine);
        res.status(200).send(`${newWine.name} posted`);
    }
    catch (err) {
        res.status(500).end();
        res.send(err);
    }
});
routes.patch('/:id/patch', async (req, res) => {
    try {
        const { id } = req.params;
        const wineUpdates = req.body;
        await db('wines').where('id', id).update(wineUpdates);
        res.status(204).end();
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db('wines').where('id', id).del();
        res.status(204).end();
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
