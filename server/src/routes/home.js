const express = require('express');
const auth = require('../../middleware/auth');

const homeRouter = express.Router();

homeRouter.get('/', auth, (req, res) => {
  // если токен валиден — req.user уже есть
  res.json({
    message: 'Welcome to home page',
    user: req.user,
  });
});

module.exports = homeRouter;