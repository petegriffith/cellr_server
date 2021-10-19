
export async function up(knex) {
    const createUserTable = () => {
        return knex.schema.createTable('users', (t) => {
            t.string('username').primary()
            t.string('password').notNull()
        })
    }
    const createWineList = () => {
        return knex.schema.createTable('wines', (t) => {
            t.increments('id').primary()
            t.string('name')
            t.string('varietal')
            t.integer('price').notNull()
            t.string('purchase_location').notNull()
            t.integer('rating').notNull()
            t.string('color').notNull()
            t.timestamp('created_at').defaultTo(knex.fn.now())
        })
    }
  
    await createUserTable()
    await createWineList()
  }
  
  export async function down(knex) {
    const dropUserTable = () => {
        return knex.schema.dropTable('users')
    }
  
    const dropWineList = () => {
        return knex.schema.dropTable('wines')
    }
  
    await dropUserTable()
    await dropWineList()
  }
  