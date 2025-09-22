const mongoose = require('mongoose');
const toJSON = require('../../utils/toJSON')

const userShema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Email format is invalid'] 
  }, 
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
   name: { type: String, required: true }
})

mongoose.plugin(toJSON)

const User = mongoose.model('User', userShema);
module.exports = User;