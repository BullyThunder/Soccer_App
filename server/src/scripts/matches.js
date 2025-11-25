if (require.main === module) {
  const mongoose = require('mongoose')
  const Matches = require('./models/matches') 
  require('dotenv').config()

  const url = process.env.MONGODB_URI
  mongoose.set('strictQuery', false)

  mongoose.connect(url)
    .then(() => {
      if (process.argv.length === 2) {
        
        return Matches.find({})
      } else if (process.argv.length === 4) {
        
        const team1 = process.argv[2]
        const team2 = process.argv[3]

        const match = new Matches({ team1, team2 })
        return match.save()
      } else {
        console.log('Usage:')
        console.log('To list all matches: node matches.js')
        console.log('To add a match: node matches.js <team1> <team2>')
        process.exit(1)
      }
    })
    .then(result => {
      if (Array.isArray(result)) {
        result.forEach(match => console.log(match))
      } else {
        console.log('Match added:', result)
      }
      return mongoose.connection.close()
    })
    .catch(error => {
      console.error('Error:', error.message)
      mongoose.connection.close()
    })
}