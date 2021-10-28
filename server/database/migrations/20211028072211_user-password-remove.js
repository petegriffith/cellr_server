export async function up(knex) {
    const dropUserPassword = () => {
      return knex.schema.table('users', (t) => {
        t.dropColumn('password')
      })
    }
  
    await dropUserPassword()
  }
  
  export async function down(knex) {
    const revertUserPassword = () => {
      return knex.schema.table('users', (t) => {
        t.string('password').notNull()
      })
    }
  
    await revertUserPassword()
  }
  