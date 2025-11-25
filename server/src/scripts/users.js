if (require.main === module) {
  const mongoose = require('mongoose')
  const bcrypt = require('bcrypt')
  const User = require('./models/user') // путь к модели User
  require('dotenv').config()

  const url = process.env.MONGODB_URI
  mongoose.set('strictQuery', false)

  mongoose.connect(url)
    .then(async () => {
      if (process.argv.length === 2) {
        
        return User.find({})
      } else if (process.argv.length === 6) {
        
        const username = process.argv[2]
        const email = process.argv[3]
        const password = process.argv[4]
        const role = process.argv[5]

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const user = new User({ username, email, passwordHash, role })
        return user.save()
      } else {
        console.log('Usage:')
        console.log('To list all users: node user.js')
        console.log('To add a user: node user.js <username> <email> <password> <role>')
        process.exit(1)
      }
    })
    .then(result => {
      if (Array.isArray(result)) {
        result.forEach(user => console.log(user))
      } else {
        console.log('User added:', result)
      }
      return mongoose.connection.close()
    })
    .catch(error => {
      console.error('Error:', error.message)
      mongoose.connection.close()
    })
}
