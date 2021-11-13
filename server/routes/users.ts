import { Router, Request, Response } from 'express'
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

routes.get('/:email', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.params
        const user: UserData = await db('users').where('email', email).first()
        res.status(200).send(user)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})

routes.post('/', async (req: Request, res: Response) => {
    const newUser: UserData = req.body
    try {
      await db('users').insert(newUser)
      res.status(200).send(newUser)
    } catch (err) {
      res.status(500)
      res.send(err)
    }
  })

export default routes