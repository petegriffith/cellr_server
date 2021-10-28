export async function up(knex) {
    const dropUserPkey = () => {
      return knex.schema.table('users', (t) => {
        t.dropColumn('username')
      })
    }
    const addNewUserPkey = () => {
      return knex.schema.table('users', (t) => {
        t.increments('id').primary()
        t.string('username').notNull()
      })
    }
  
    await dropUserPkey()
    await addNewUserPkey()
  }
  
  export async function down(knex) {
    const dropUserPkey = () => {
      return knex.schema.table('users', (t) => {
        t.dropColumn('id')
        t.dropCulumn('username')
      })
    }
    const revertUserUsername = () => {
      return knex.schema.table('users', (t) => {
        t.string('username').primary()
      })
    }
  
    await dropUserPkey()
    await revertUserUsername()
  }
  