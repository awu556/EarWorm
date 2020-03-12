const User = require('./user')
const Song = require('./songs')

Song.belongsTo(User)
User.hasMany(Song)

module.exports = {
  User,
  Song
}
