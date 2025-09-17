const mongoose = require('mongoose');
const toJSON = require('../../utils/toJSON')


const matchSchema = new mongoose.Schema({
  homeTeam:{
     type: String,
    minlength: 2,
    required: true
  },
  awayTeam:{
    type: String,
    minlength: 2,
    required: true
  },
  score: {
  type: String,
  required: true,
  validate: {
    validator: function(v) {
      return /^\d+:\d+$/.test(v)  // одна или более цифр, двоеточие, одна или более цифр
    },
    message: props => `${props.value} is not a valid score format!`
  }
    }
  })

mongoose.plugin(toJSON)

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;