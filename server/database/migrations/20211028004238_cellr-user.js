export async function up(knex) {
    const addNewUserColumns = () => {
        return knex.schema.table('users', (t) => {
            t.integer('cellr_id').references('cellrs.id').onUpdate('CASCADE').onDelete('CASCADE')
            t.timestamp('created_at').defaultTo(knex.fn.now())
        })
    }
    const renameCellrTimestamp = () => {
        return knex.schema.table('cellrs', (t) => {
            t.renameColumn('encounter_date', 'created_at')
        })
    }
   
    await addNewUserColumns()
    await renameCellrTimestamp()
  }
  
  export async function down(knex) {
    const dropNewUserColumns = () => {
        return knex.schema.table('users', (t) => {
            t.dropColumn('cellr_id')
            t.dropColumn('created_at')
        })
    }

    const revertCellrTimestamp = () => {
        return knex.schema.table('cellrs', (t) => {
            t.renameColumn('created_at', 'encounter_date')
        })
    }
    
    await dropNewUserColumns()
    await revertCellrTimestamp()
  }