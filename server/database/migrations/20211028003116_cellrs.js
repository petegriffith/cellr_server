
export async function up(knex) {
    const createCellrsTable = () => {
        return knex.schema.createTable('cellrs', (t) => {
            t.increments('id').primary()
            t.string('name').notNull()
            t.timestamp('encounter_date').defaultTo(knex.fn.now())
        })
    }

    await createCellrsTable()
}

export async function down(knex) {
    const dropCellrsTable = () => {
        return knex.schema.dropTable('cellrs')
    }

    await dropCellrsTable()
}
