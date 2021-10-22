import { Router, Request, Response } from 'express'
import { WineEncounter } from '../../typescript/wineTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/allEncounters', async (req: Request, res: Response) => {
  try {
    const encounters: WineEncounter[] = await db('encounters')
    res.status(200).send(encounters)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.get('/byID/:wine_id', async (req: Request, res: Response) => {
  try {
    const { wine_id }  = req.params
    const encounters: WineEncounter[] = await db('encounters').where('id', wine_id)
    res.status(200).send(encounters)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.get('/byName/:wine_name', async (req: Request, res: Response) => {
  try {
    const { wine_name }  = req.params
    const encounters: WineEncounter[] = await db('encounters').where('wine_name', wine_name)
    res.status(200).send(encounters)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})


routes.post('/post/:wine_id', async (req: Request, res: Response) => {
  try {
    const { wine_id } = req.params
    const newEncounter = req.body
    newEncounter.wine_id = wine_id
    // Not sure if these two lines work, have to try them out
    const wine_name = await db('wines').where('id', wine_id).select('name')
    newEncounter.wine_name = wine_name
    // ^^
    await db('encounters').insert(newEncounter)
    res.status(200).send(newEncounter)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

routes.delete('/delete/:encounterId', async (req: Request, res: Response) => {
  try {
    const { encounterId }  = req.params
    const intEncounterId: number = +encounterId
    await db('encounters').where('id', intEncounterId).del()
    res.status(202).send(intEncounterId)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

export default routes
