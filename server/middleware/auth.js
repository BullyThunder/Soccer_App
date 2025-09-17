const jwt = require('jsonwebtoken');

const auth = async(req,res,next) =>{
    try{
         const authHeader = req.headers['authorization'];
        if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
        }
      const token = authHeader.replace("Bearer ", "");
       
        const decoded = await new Promise((resolve,reject)=>{
            jwt.verify(token,process.env.SECRET, (err,decoded)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(decoded);
                }
            })
        })
        req.user = decoded; // ⚠ сохраняем информацию о пользователе
        next();
    }
    catch(error){
        next(error)
    }
}

module.exports = auth ;