const axios = require('axios'); 
const API_KEY = process.env.FOOTBALL_DATA_KEY;

const fetchBarcelonaMatches = async() =>{
    const res = await axios.get(
        `https://api.football-data.org/v4/teams/81/matches`,
        {headers:{"X-Auth-Token": API_KEY}}
    )
    const all_Matches = res.data.matches;
    const finishedMatches = all_Matches.filter(m=>m.status === FINISHED);
    const last_5_Matches = finishedMatches.slice(-5).reverse();
    return last_5_Matches
}

module.exports = fetchBarcelonaMatches;

