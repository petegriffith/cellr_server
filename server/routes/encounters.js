import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/', async (req, res) => {
    try {
        const encounters = await db('encounters');
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.get('/fromWine/:wineId', async (req, res) => {
    try {
        const { wineId } = req.params;
        const encounters = await db('encounters').where('wine_id', wineId);
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.post('/toWine/:wineId', async (req, res) => {
    try {
        const { wineId } = req.params;
        const newEncounter = req.body;
        newEncounter.wine_id = +wineId;
        await db('encounters').insert(newEncounter);
        res.status(200).send(newEncounter);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.delete('/:encounterId', async (req, res) => {
    const { encounterId } = req.params;
    try {
        await db('encounters').where('id', encounterId).del();
        res.status(202).send('encounter deleted');
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
