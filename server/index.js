const express = require('express')
const connectDB = require('./mongo')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const matchesRouter = require('./src/routes/matches')
const teamsRouter = require('./src/routes/teams')
const usersRouter = require('./src/routes/users')
const signUpRouter = require('./src/routes/signup')
const loginRouter = require('./src/routes/login')
const homeRouter = require('./src/routes/home')
const adminMatches = require('./src/routes/admin/matches')

const app = express()
app.use(cors({
   origin: "http://localhost:3002", // адрес твоего локального фронта
  credentials: true                // важно для httpOnly cookie
}));
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Server is running!');
});

connectDB()
// Все запросы к /matches будут обрабатываться в matchesRouter
app.use('/matches', matchesRouter)
app.use('/teams', teamsRouter)
app.use('/users', usersRouter)
app.use('/signup', signUpRouter)
app.use('/login', loginRouter)
app.use('/home', homeRouter)
app.use('/admin/matches',adminMatches)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))