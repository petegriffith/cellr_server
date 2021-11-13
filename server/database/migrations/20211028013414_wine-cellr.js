export async function up(knex) {
    const addNewWineFkey = () => {
      return knex.schema.table('wines', (t) => {
        t.integer('cellr_id').references('cellrs.id').onUpdate('CASCADE').onDelete('CASCADE')
      })
    }
  
    await addNewWineFkey()
  }
  
  export async function down(knex) {
    const dropWineFkey = () => {
      return knex.schema.table('wines', (t) => {
        t.dropColumn('cellr_id')
      })
    }
  
    await dropWineFkey()
  }
  