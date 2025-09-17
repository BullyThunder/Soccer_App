const express = require('express');
const router = express.Router()
const Teams = require('../models/teams')
const { upload } = require('../../config/cloudinary');

router.get('/',(req,res)=>{
    res.send('All_Teams')
});

router.post('/',upload.single('image') ,async(req,res)=>{
    try{
    const { nameTeam} = req.body;
    const file_Img = req.file;
    if(!nameTeam || !file_Img){
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newTeams = new Teams({
        nameTeam: nameTeam,
        image: file_Img.path
    })
    const savedTeams = await newTeams.save();

    res.status(201).json(savedTeams);
    }
    catch(error){
        console.error(error);
         res.status(500).json({ error: 'Server error' });
    }
})

module.exports = router