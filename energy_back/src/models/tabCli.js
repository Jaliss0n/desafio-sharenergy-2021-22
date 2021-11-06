// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Cliente = sequelize.define("cliente", {
    numeroCliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    usinaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        
    },
    percentualDeParticipacao: {
        allowNull: false,
        type: Sequelize.INTEGER(4),
        
    },
    
    
});
 
module.exports = Cliente;
