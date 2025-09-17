if (require.main === module) {
  const mongoose = require('mongoose')
  const Team = require('./src/models/teams') // путь к модели Team
  require('dotenv').config()

  const url = process.env.MONGODB_URI
  mongoose.set('strictQuery', false)

  mongoose.connect(url)
    .then(() => {
      if (process.argv.length === 2) {
        // node teams.js → вывести все команды
        return Team.find({})
      } else if (process.argv.length === 4) {
        // node teams.js <teamName> <imagePath>
        const nameTeam = process.argv[2]
        const image = process.argv[3]

        const newTeam = new Team({ nameTeam, image })
        return newTeam.save()
      } else {
        console.log('Usage:')
        console.log('To list all teams: node teams.js')
        console.log('To add a team: node teams.js <teamName> <imagePath>')
        process.exit(1)
      }
    })
    .then(result => {
      if (Array.isArray(result)) {
        result.forEach(team => console.log(team))
      } else {
        console.log('Team added:', result)
      }
      return mongoose.connection.close()
    })
    .catch(error => {
      console.error('Error:', error.message)
      mongoose.connection.close()
    })
}
