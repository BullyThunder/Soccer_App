const express = require('express');
const router = express.Router()
const Matches = require('../models/matches')
const { fetchBarcelonaMatches, fetchBarcelonaMatches_last5 } = require('../../services/footballApi');
const errorHandler = require('../../middleware/errorHandler')

router.get('/',async(req,res,next)=>{
    try{
        const last5 = await fetchBarcelonaMatches_last5();
        res.json(last5)
    }
    catch(error){
        next(error)
    }
});
router.get('/all_matches', async(req,res,next)=>{
    try{
    const allMatches = await fetchBarcelonaMatches();
    res.json(allMatches)
    }
    catch(error){
        next(error)
    }
})
module.exports = router


