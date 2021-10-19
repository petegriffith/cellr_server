
export async function up(knex) {
    const addWineName = () => {
        return knex.schema.table('encounters', (t) => {
            t.string('wine_name').notNull()
        })
    }
    await addWineName()
  }
  
  export async function down(knex) {
    const dropWineName = () => {
        return knex.schema.table('encounters', (t) => {
          t.dropColumn('wine_name')
        })
    }
    await dropWineName()
  }
