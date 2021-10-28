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

export default routes