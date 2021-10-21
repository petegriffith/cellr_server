import { Router, Request, Response } from 'express'
import { Wine } from '../../typescript/wineTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/allWines', async (req: Request, res: Response) => {
  try {
    const wines: Wine[] = await db('wines')
    res.status(200).send(wines)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.post('/post', async (req: Request, res: Response) => {
  try {
    const newWine = req.body
    await db('wines').insert(newWine)
    res.status(200).send(`${newWine.name} posted`)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

// This is a work in progress, obviously
routes.patch('/patchWine/:wine_id', async (req: Request, res: Response) => {
  try { 
    const { wine_id } = req.params
    const wineUpdates = req.body
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.delete('/delete/:wine_id', async (req: Request, res: Response) => {
  try {
      const { wine_id } = req.params;
      const int_wine_id = +wine_id
      await db('wines').where('id', int_wine_id).del()
      res.status(202).send(`wine ${wine_id} deleted!`).end()
  }
  catch (err) {
      res.status(500);
      res.send(err);
  }
});

export default routes