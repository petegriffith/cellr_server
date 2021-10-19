
import Knex  from 'knex';
import devConfig from '../knexfile.js'

// this will have to get more involved if I want to switch between multiple configs

export default Knex(devConfig);
