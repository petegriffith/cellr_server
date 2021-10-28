import cellrList from './data/cellrs.js'
import userList from './data/users.js'
import wineList from './data/wines.js'
import encountersList from './data/encounters.js'

export async function seed(knex) {
  // Deletes ALL existing entries
  const deleteAllTables = () => {
    return knex('cellrs')
      .del()
      .then(function() {
        return knex('users').del()
      })
      .then(function() {
        return knex('wines').del()
      })
      .then(function() {
        return knex('encounters').del()
      })
  }

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

  await deleteAllTables()
  await seedCellrs()
  await seedUsers()
  await seedWines()
  await seedEncounters()
}
