const jwt = require('jsonwebtoken');

const auth = async(req,res,next) =>{
    try{
      const token = req.cookies.token;
      console.log('Cookies:', req.cookies);
        if (!token) return res.status(401).json({ error: 'No token provided' });

        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded;
        console.log(req.cookies) // ⚠ сохраняем информацию о пользователе
        console.log("Cookies:", req.cookies);
        console.log("Decoded user:", req.user);
        next();
    }
    catch(error){
        next(error)
    }
}

module.exports = auth ;