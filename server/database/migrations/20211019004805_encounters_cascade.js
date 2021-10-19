
export async function up(knex) {
    const dropWineId = () => {
        return knex.schema.table('encounters', (t) => {
            t.dropColumn('wine_id')
        })
    }
    const addNewWineId = () => {
        return knex.schema.table('encounters', (t) => {
            t.integer('wine_id').references('wines.id').onUpdate('CASCADE').onDelete('CASCADE')
        })
    }
    await dropWineId()
    await addNewWineId()
  }
  
  export async function down(knex) {
    const dropWineId = () => {
        return knex.schema.table('encounters', (t) => {
            t.dropColumn('wine_id')
        })
    }
    const revertWineId = () => {
        return knex.schema.table('encounters', (t) => {
            t.integer('wine_id').references('wines.id')
        })
    }
    await dropWineId()
    await revertWineId()
  }