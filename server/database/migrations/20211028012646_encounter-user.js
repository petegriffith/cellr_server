export async function up(knex) {
    const addNewEncounterFkey = () => {
      return knex.schema.table('encounters', (t) => {
        t.integer('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
      })
    }
  
    await addNewEncounterFkey()
  }
  
  export async function down(knex) {
    const dropEncounterFkey = () => {
      return knex.schema.table('encounters', (t) => {
        t.dropColumn('user_id')
      })
    }
  
    await dropEncounterFkey()
  }
  