
export async function up(knex) {
    const addVintage = () => {
        return knex.schema.table('wines', (t) => {
            t.integer('vintage')
        })
    }
    await addVintage()
  }
  
  export async function down(knex) {
    const dropVintage = () => {
        return knex.schema.table('wines', (t) => {
          t.dropColumn('vintage')
        })
    }
    await dropVintage()
  }

