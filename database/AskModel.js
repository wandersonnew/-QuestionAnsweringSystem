const Sequelize = require('sequelize')
const Connection = require('./database')

const Ask = Connection.define('Ask', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Ask.sync({ force: false })
console.log("Ask models were synchronized successfully.")

module.exports = Ask

/*module.exports = {
    Ask,
    pagination
}*/