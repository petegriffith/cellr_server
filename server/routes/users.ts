import { Router, Request, Response } from 'express'
import { UserData } from '../../typescript/adminTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/all', async (req: Request, res: Response): Promise<void> => {
    try {
        const users: UserData[] = await db('users')
        res.status(200).send(users)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})

routes.get('/:user_id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id } = req.params
        const user: UserData = await db('users').where('id', user_id).first()
        res.status(200).send(user)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})

routes.post('/', async (req: Request, res: Response) => {
    const newUser: UserData = req.body
    try {
      await db('wines').insert(newUser)
      res.status(204).end()
    } catch (err) {
      res.status(500)
      res.send(err)
    }
  })

export default routes