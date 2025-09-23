const mongoose = require('mongoose');
const toJSON = require('../../utils/toJSON')


const matchSchema = new mongoose.Schema({
  utcDate:{
    type: Date,
    required: true
  },
  homeTeam:{
     shortName: String,
     crest: String
  },
  awayTeam:{
     shortName: String,
     crest: String
  },
  score: {
  type: {
    fullTime: {
      home: Number,
      away: Number
    }
  },
  required: true
  }
  })

mongoose.plugin(toJSON)

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;