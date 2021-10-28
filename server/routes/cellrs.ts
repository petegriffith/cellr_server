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

routes.get('/:cellr_id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { cellr_id } = req.params
        const cellr: CellrData = await db('cellrs').where('id', cellr_id).first()
        res.status(200).send(cellr)
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})

export default routes