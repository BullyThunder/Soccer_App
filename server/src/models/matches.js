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
      home: { type: Number, default:0},
      away: { type: Number, default:0 }
    },
    },
     required: true
  },
  source:{
     type: String,
    enum: ['api','custom'],   // чтобы явно указывать источник
    default: 'custom'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
  })

mongoose.plugin(toJSON)

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;