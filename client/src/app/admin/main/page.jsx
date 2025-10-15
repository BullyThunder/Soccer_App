"use client";
import { useState } from 'react';
import { Axios } from 'axios';
import createMatch from '../../user/api/createMatch.js'
import '../../globals.css';

const AdminPage = () =>{
    const [formData, setFormData] = useState({
        homeTeam: {
           shortName: "",
            crest: ""
        },
        awayTeam: {
           shortName: "",
          crest: ""
        },
        utcDate: "",
        score: {
            fullTime: {
                home: 0,
                away: 0
            }
        },
    })
    const [matches, setMatches] = useState([]);
    const handleChange = (e) =>{
      const {name,value} = e.target
      if(name === "homeTeam" || name === "awayTeam"){
        setFormData(prev=>({
            ...prev,
            [name]:{
              ...prev[name],
              shortName: value
            }
            }))
      }
      else if(name === "date"){
        setFormData(prev=>({
          ...prev,
          utcDate: value
        }));
      }
    }
    const handleHomeScoreChange = (e) =>{
       const {value} = e.target
        setFormData( prev =>({
            ...prev,
            score:{
                ...prev.score,
                fullTime:
                {
                    ...prev.score.fullTime,
                    home:Number(value)
                }
                
            }  

    }))
    }
    const handleAwayScoreChange = (e) =>{
      const{value} = e.target
      setFormData(prev=>({
        ...prev,
        score: {
          ...prev.score,
          fullTime:{
            ...prev.score.fullTime,
            away: Number(value)
          }
        }
      }))
    }
   const sendData = async () => {
  try {
    const utcDate = new Date(formData.date);

    const teamMap = {
    "Barcelona": 81,
    "Barça": 81,
    "Real Madrid": 86,
    "Telstar": 1550,
    "Newcastle United": 60,
    "Paris Saint-Germain": 524,
    "PSG": 524
  };

    const homeCrest = `https://crests.football-data.org/${teamMap[formData.homeTeam]}.svg`;
    const awayCrest = `https://crests.football-data.org/${teamMap[formData.awayTeam]}.svg`;

    const matchData = {
      utcDate,
      homeTeam: { ...formData.homeTeam, crest: homeCrest },
      awayTeam: { ...formData.awayTeam, crest: awayCrest },
      score: formData.score,
      source: "custom",
    };

    const infoMatch = await createMatch(matchData);
    console.log("Match created:", infoMatch);
    setMatches(prev=>{
      [...prev,infoMatch]
    })
     setFormData({
  homeTeam: { shortName: "", crest: "" },
  awayTeam: { shortName: "", crest: "" },
  utcDate: "",
  score: { fullTime: { home: 0, away: 0 } },
});

  } catch (error) {
    console.log(error);
  }
};
    

     return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <div className="mb-6 flex flex-col gap-y-[10px] text-center">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
        <h2 className="text-2xl text-gray-500">Create Matches</h2>
      </div>

      <form className="gap-4 bg-white p-6 rounded-2xl shadow-md w-fit">
        <div className='grid grid-cols-2 gap-4'>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Home Team</label>
          <input
            type="text"
            name="homeTeam"
            placeholder="Enter home team"
            value={formData.homeTeam.shortName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Away Team</label>
          <input
            type="text"
            name="awayTeam"
            placeholder="Enter away team"
            value={formData.awayTeam.shortName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
        </div>
        </div>
      <div className='flex mt-2 gap-x-4'>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Score HomeTeam</label>
          <input
            type="number"
            name="score"
            value={formData.score.fullTime.home}
            onChange={handleHomeScoreChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Score AwayTeam</label>
          <input
            type="number"
            name="score"
            value={formData.score.fullTime.away}
            onChange={handleAwayScoreChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          />
        </div>
      </div>
        <div className=" flex justify-center mt-4">
          <button
            type="button"
            onClick={sendData}
            className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Create Match
          </button>
          
        </div>
      </form>
      <div className="mt-6 flex flex-col items-center w-full max-w-3xl">
  {/* Заголовок по центру */}
  <h2 className="text-2xl font-semibold mb-4 text-center">Created Matches</h2>

  {/* Список матчей */}
  <ul className="flex flex-col w-full gap-3">
    {matches.map((m, i) => (
      <li
        key={i}
        className="flex items-center justify-between bg-white p-4 rounded-lg shadow w-full"
      >
        {/* Левая часть — дата */}
        <span className="text-gray-600 w-24 text-center">
          {new Date(m.utcDate).toLocaleDateString()}
        </span>

        {/* Центральная часть — команды и счёт */}
        <div className="flex items-center justify-center gap-3 flex-1">
          <img src={m.homeTeam.crest} alt="" className="w-8 h-8" />
          <span className="font-medium">{m.homeTeam.shortName}</span>
          <strong className="text-lg">
            {m.score.fullTime.home} - {m.score.fullTime.away}
          </strong>
          <span className="font-medium">{m.awayTeam.shortName}</span>
          <img src={m.awayTeam.crest} alt="" className="w-8 h-8" />
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}
export default AdminPage;

 