
export async function up(knex) {
    const removeUserDependantColumns = () => {
        return knex.schema.table('wines', (t) => {
            t.dropColumn('price')
            t.dropColumn('purchase_location')
            t.dropColumn('rating')
        })
    }
    await removeUserDependantColumns()
  }
  
  export async function down(knex) {
    const addUserDependantColumns = () => {
        return knex.schema.table('wines', (t) => {
          t.integer('price').notNull()
          t.string('purchase_location').notNull()
          t.integer('rating').notNull()
        })
    }
    await addUserDependantColumns()
  }
  
