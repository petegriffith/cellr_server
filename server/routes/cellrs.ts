import { Router, Request, Response } from 'express'
import { CellrData } from '../../typescript/adminTypes'
import db from '../knex.js'

const routes: Router = Router()

routes.get('/all', async (req: Request, res: Response): Promise<void> => {
    try {
        const cellrs: CellrData[] = await db('cellrs')
        res.status(200).send(cellrs)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})

export default routes