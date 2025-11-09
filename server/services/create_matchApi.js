const axios = require('axios');
const API_KEY = process.env.FOOTBALL_DATA_KEY;

const save_Matches_From_Front = async() =>{
    const res = await axios.get(
        'https://soccer-app-ten.vercel.app/admin/main'
    )
}