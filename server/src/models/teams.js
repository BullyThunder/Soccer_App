const mongoose = require('mongoose');
const toJSON = require('../../utils/toJSON')

const teamSchema = new mongoose.Schema({
  nameTeam:{
     type: String,
    minlength: 2,
    required: true
  },
  image: {
    type: String,
    required: true
  }
  })

  mongoose.plugin(toJSON)
const Team = mongoose.model('Team', teamSchema);
module.exports = Team;