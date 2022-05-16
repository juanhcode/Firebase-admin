const {Pool} = require('pg');
require('dotenv').config();
const pool = new Pool({
    host:process.env.HOST,
    user:process.env.USER_BD,
    password:process.env.PASS_BD,
    database:process.env.NAME_BD,
    max:20,
    idleTimeoutMillis:30000,
    connectionTimeoutMillis:2000
})

module.exports = {pool}