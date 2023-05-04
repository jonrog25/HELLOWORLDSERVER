const mysql = require('mysql2')
const dotenv = require('dotenv')

//JSON
// const dbConfig = {
//     host: "<hostname>",
//     port: 3306,
//     user: "<username>",
//     password: "<password>",
//     database: "<schema>",
//     connectionTimeout: 10000,
// }

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT||"3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    databse: process.env.DB_DATABASE,
    connectTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT||"3306"),

}

const connection = mysql.
creatConnection(dbConfig);

module.exports = connection;