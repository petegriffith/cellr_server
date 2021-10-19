import { Router } from 'express';
import db from '../knex.js';
const routes = Router();
routes.get('/allEncounters', async (req, res) => {
    try {
        const encounters = await db('encounters');
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.get('/:wine_id', async (req, res) => {
    try {
        const { wine_id } = req.params;
        const encounters = await db('encounters').where('id', wine_id);
        res.status(200).send(encounters);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.post('/post/:wine_id', async (req, res) => {
    try {
        const { wine_id } = req.params;
        const newEncounter = req.body;
        newEncounter.wine_id = wine_id;
        await db('encounters').insert(newEncounter);
        res.status(200).send(newEncounter);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
routes.delete('/delete/:encounterId', async (req, res) => {
    try {
        const { encounterId } = req.params;
        const intEncounterId = +encounterId;
        await db('encounters').where('id', intEncounterId).del();
        res.status(202).send(intEncounterId);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
});
export default routes;
