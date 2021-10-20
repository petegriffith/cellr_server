import express from 'express'
import 'dotenv/config'
import db from './knex.js'
import users from './routes/users.js'
import wines from './routes/wines.js'
import encounters from './routes/encounters.js'

const port = process.env.PORT || 3000

export default async () => {
  // Initialize express
  const app = express()
  // migrations and seeds
  console.log('running migrations')
  await db.migrate.latest()
  console.log('running seeds')
  await db.seed.run()

  //Middleware
  app.use(express.json())

  // API routes
  app.use('/users', users)
  app.use('/wines', wines)
  app.use('/encounters', encounters)

  

  app.listen(port, () => {
    console.log('app listening at port: ', port)
  })
}
