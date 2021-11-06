require('dotenv/config');
const fs = require('fs');
// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: "db_clientes",
            dialect: 'mysql',
            user: 'root',
            password: 'root'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
