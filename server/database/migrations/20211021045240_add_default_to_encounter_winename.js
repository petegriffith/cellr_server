
export async function up(knex) {
    const addDefault = () => {
        return knex.schema.table('encounters', (t) => {
            t.string('wine_name').defaultTo('Unknown - see notes').alter()
        })
    }
    await addDefault()
  }
  
  export async function down(knex) {
    const revertDefault = () => {
        return knex.schema.table('encounters', (t) => {
          t.string('wine_name').notNull().alter()
        })
    }
    await revertDefault()
  }