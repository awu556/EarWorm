const Sequelize = require('sequelize')
const db = require('../db')

const Song = db.define('song', {
  searchHistory: {
    type: Sequelize.STRING,
    allowNull: false
  },
  savedSong: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Song
