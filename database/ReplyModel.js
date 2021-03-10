const Sequelize = require('sequelize')
const Connection = require('./database')

const Reply = Connection.define('Reply', {
    reply: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ask_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Reply.sync({ force: false })
console.log("Reply models were synchronized successfully.")

module.exports = Reply