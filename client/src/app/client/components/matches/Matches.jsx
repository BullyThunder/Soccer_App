"use client";
import { useState,useEffect } from "react";
import api from "../../../api/axios.js";
const Matches = () =>{
    const [matches,setMatches] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
        const res = await api.get('/matches');
        setMatches(res.data);
    };
        fetchData()
},[])

return (
    <div className="container-custom">
        <div className="flex items-center">
            <h1>Last Matches</h1>
            <ul>
                {matches.map(m=>{
                    return <li key={m.id}>{m.homeTeam} vs {m.awayTeam}</li>
                })}
            </ul>
        </div>
    </div>
)
}
export default Matches;