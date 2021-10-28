export async function up(knex) {
    const addUserEmail = () => {
      return knex.schema.table('users', (t) => {
        t.string('email').notNull()
      })
    }
  
    await addUserEmail()
  }
  
  export async function down(knex) {
    const dropUserEmail = () => {
      return knex.schema.table('users', (t) => {
        t.dropColumn('email')
      })
    }
  
    await dropUserEmail()
  }
  