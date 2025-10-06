'use client';
import { useState,useEffect } from "react";
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter,usePathname } from "next/navigation";
import api from "../../api/axios";
const Matches = () =>{
    const [matches,setMatches] = useState([]);
     const router = useRouter();
     const pathName = usePathname();
    useEffect(()=>{
        const fetchData = async() =>{
        const res = await api.get('/matches',{withCredentials: true});
        setMatches(res.data);
    };
        fetchData()
},[])
  useEffect(()=>{
    if(pathName.includes("#")){
      const id = pathName.split('#')[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }},[router.asPath])

return (
  <div className="container-custom">
    <div className="flex flex-col gap-2 justify-center items-center ">
      <div className="pt-[73.3px] pb-[96.31px]">
      <h1 className="font-ttRuns-800 text-[50px] h1-link">
        Last Matches</h1>
      </div>
      <div className="
    mb-[64.61px]
    box-border 
    border-[0.95px] border-[rgba(10,47,105,1)] 
    rounded-[19.09px] 
    shadow-[0_3.8177871704101562px_10.498915672302246px_0_rgba(19,63,136,1)]
    w-full
">
  <ul className="
    font-ttRuns-400
    text-[rgba(0,35,75,1)] 
    text-[38.14px] 
    text-left
    w-full
  ">
    {matches.map((m) => (
      <li 
        key={m.id} 
        className="
          grid 
          grid-cols-[150px_330px_1fr_140px_1fr_300px] 
          gap-4
          items-center 
          h-[143px] 
          px-8
          border-b border-gray-200 
          last:border-b-0
          w-full
        "
      >
        {/* Дата */}
        <span className="text-[38.14px] text-gray-600 font-medium">
          {dayjs(m.utcDate).format('DD.MM.YYYY')}
        </span>
        
        {/* Логотип домашней команды */}
        <div className="flex justify-center">
          <img
            src={m.homeTeam.crest}
            alt={m.homeTeam.name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        
        {/* Название домашней команды */}
        <span className="text-right text-[38.14px] font-semibold truncate pr-3">
          {m.homeTeam.shortName}
        </span>

        {/* Счёт */}
        <div className="flex justify-center items-center">
          <span className="text-center text-[38.14px] font-bold bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg min-w-[80px]">
            {m.score.fullTime.home}-{m.score.fullTime.away}
          </span>
        </div>

        {/* Название гостевой команды */}
        <span className="text-left text-[38.14px] font-semibold truncate pl-3">
          {m.awayTeam.shortName}
        </span>
        
        {/* Логотип гостевой команды */}
        <div className="flex justify-center">
          <img
            src={m.awayTeam.crest}
            alt={m.awayTeam.name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </li>
    ))}
  </ul>
</div>
      </div>
      <div className="flex justify-start">
        <Link href="client/all_matches">
  <button className="font-ttRuns-400 text-[40px]  h2-link">Watch All</button>
  </Link>
</div>
    </div>
  );
};

export default Matches;