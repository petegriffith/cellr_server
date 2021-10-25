import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/all', async (req, res) => {
    try {
        const encounters = await db('encounters');
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.get('/byWineID', async (req, res) => {
    try {
        const wineId = req.body;
        const encounters = await db('encounters').where('wine_id', wineId.wine_id);
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.post('/', async (req, res) => {
    try {
        const newEncounter = req.body;
        //Grabbing the wine name from the wines database
        const selectedName = await db('wines').where('id', newEncounter.wine_id).select('name');
        newEncounter.wine_name = selectedName[0].name;
        //
        await db('encounters').insert(newEncounter);
        res.status(200).send(newEncounter);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.delete('/', async (req, res) => {
    try {
        const encounterId = req.body;
        await db('encounters').where('id', encounterId.id).del();
        res.status(202).send('encounter deleted');
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
