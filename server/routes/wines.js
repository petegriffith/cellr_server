import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/all', async (req, res) => {
    try {
        const wines = await db('wines');
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
        res.status(500).send(newWine);
        res.send(err);
    }
});
// This is a work in progress, obviously
routes.patch('/patchWine/:wine_id', async (req, res) => {
    try {
        const { wine_id } = req.params;
        const wineUpdates = req.body;
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.delete('/', async (req, res) => {
    try {
        const wineId = req.body;
        await db('wines').where('id', wineId.id).del();
        res.status(202).send(`wine deleted`).end();
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
