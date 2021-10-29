import { Router, Request, Response } from 'express'
import { Wine, NewWine } from '../../typescript/wineTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/all', async (req: Request, res: Response) => {
  try {
    const wines: Wine[] = await db('wines').where('cellr_id', req.headers.cellr_id)
    res.status(200).send(wines)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.get('/:wine_id', async (req: Request, res: Response) => {
  try {
    const { wine_id } = req.params
    const wines: Wine = await db('wines').where('id', wine_id).first()
    res.status(200).send(wines)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.post('/', async (req: Request, res: Response) => {
  const newWine: NewWine = req.body
  try {
    await db('wines').insert(newWine)
    res.status(200).send(`${newWine.name} posted`)
  } catch (err) {
    res.status(500).end()
    res.send(err)
  }
})

routes.patch('/:id/patch', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const wineUpdates = req.body
    await db('wines').where('id', id).update(wineUpdates)
    res.status(204).end()
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await db('wines').where('id', id).del()
    res.status(204).end()
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})
  
export default routes
