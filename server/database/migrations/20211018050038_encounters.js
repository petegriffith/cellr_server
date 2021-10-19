
export async function up(knex) {
    const createEncountersTable = () => {
        return knex.schema.createTable('encounters', (t) => {
            t.increments('id').primary()
            t.integer('wine_id').references('wines.id')
            t.integer('bottle_price')
            t.string('purchase_location').defaultTo('unknown')
            t.integer('rating')
            t.string('notes').defaultTo('')
            t.timestamp('encounter_date').defaultTo(knex.fn.now())
        })
    }

    await createEncountersTable()
}

export async function down(knex) {
    const dropEncountersTable = () => {
        return knex.schema.dropTable('encounters')
    }

    await dropEncountersTable()
}
