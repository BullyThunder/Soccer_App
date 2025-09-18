const jwt = require('jsonwebtoken');

const auth = async(req,res,next) =>{
    try{
      const token = req.cookies.token;
        if (!token) return res.status(401).json({ error: 'No token provided' });

        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded; // ⚠ сохраняем информацию о пользователе
        next();
    }
    catch(error){
        next(error)
    }
}

module.exports = auth ;