import cellrList from './data/cellrs.js'
import userList from './data/users.js'
import wineList from './data/wines.js'
import encountersList from './data/encounters.js'

export async function seed(knex) {
  // Deleting
  const deleteCellrs = async () => {
    await knex('cellrs').del()
  }

  const deleteUsers = async () => {
    await knex('users').del()
  }

  const deleteWines = async () => {
    await knex('wines').del()
  }

  const deleteEncounters = async () => {
    await knex('encounters').del()
  }

  // Reseeding
  const seedCellrs = async () => {
    let cellrs = cellrList
    for (let cellr of cellrs) {
      await knex('cellrs').insert(cellr)
    }
  }

  const seedUsers = async () => {
    let users = userList
    for (let user of users) {
      await knex('users').insert(user)
    }
  }

  const seedWines = async () => {
    let wines = wineList
    for (let wine of wines) {
      await knex('wines').insert(wine)
    }
  }

  const seedEncounters = async () => {
    let encounters = encountersList
    for (let encounter of encounters) {
      await knex('encounters').insert(encounter)
    }
  }

  await deleteCellrs()
  await deleteUsers()
  await deleteWines()
  await deleteEncounters()
  await seedCellrs()
  await seedUsers()
  await seedWines()
  await seedEncounters()
}
