export async function up(knex) {
    const addNewEncounterFkey = () => {
      return knex.schema.table('wines', (t) => {
        t.integer('cellr_id').references('cellrs.id').onUpdate('CASCADE').onDelete('CASCADE')
      })
    }
  
    await addNewEncounterFkey()
  }
  
  export async function down(knex) {
    const dropEncounterFkey = () => {
      return knex.schema.table('wines', (t) => {
        t.dropColumn('cellr_id')
      })
    }
  
    await dropEncounterFkey()
  }
  