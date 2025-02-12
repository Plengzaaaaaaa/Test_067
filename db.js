const mysql = require ('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createPool({
    host:process.env.HOST,
    user:process.env.User,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT
})