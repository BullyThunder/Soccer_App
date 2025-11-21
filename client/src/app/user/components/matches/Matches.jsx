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
      <div className="pt-[73.3px] pb-[96.31px]
      max-[970px]:pb-[73.3px]
      max-[700px]:pb-[50px]
      max-[700px]:pt-[50px]
      max-[500px]:pt-[20px]
      max-[500px]:pb-[20px]
      ">
      <h1 className="font-ttRuns-800 text-[50px] h1-link 
      max-[860px]:text-[40px] max-[660px]:text-[30px]
       max-[500px]:text-[25px]
      ">
        Last Matches</h1>
      </div>
      <div className="
      mx-[20px]
    mb-[64.61px]
    box-border 
    border-[0.95px] border-[rgba(10,47,105,1)] 
    rounded-[19.09px] 
    shadow-[0_3.8177871704101562px_10.498915672302246px_0_rgba(19,63,136,1)]
    w-full
    pl
">
  <ul className="
    font-ttRuns-400
    text-[rgba(0,35,75,1)] 
    text-[38.14px] 
    text-left
    max-[460px]:text-center
    w-full
  ">
    {matches.map((m) => (
      <li 
        key={m.id} 
        className="
          grid 
          grid-cols-[minmax(80px,1fr)_minmax(60px,1fr)_1fr_minmax(80px,1fr)_1fr_minmax(80px,1fr)]
          max-[600px]:grid-cols-[1fr_1fr_1fr_1fr]
          gap-4
          items-center 
          h-[143px] 
          px-8
          max-[460px]:px-4
          border-b border-gray-200 
          last:border-b-0
          w-full
        "
      >
        {/* Дата */}
        <span className="text-[38.14px] text-gray-600 
        font-medium max-[1245px]:text-[28px] 
        max-[860px]:text-[20px] max-[700px]:text-[16px]
        max-[375px]:text-[12px]
        ">
          {dayjs(m.utcDate).format('DD.MM.YYYY')}
        </span>
        
        {/* Логотип домашней команды */}
        <div className="flex justify-center max-[1245px]:justify-end">
          <img
            src={m.homeTeam.crest}
            alt={m.homeTeam.name}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-contain 
            transition-all duration-200 max-[970px]:w-[50px] 
            max-[970px]:h-[50px] max-[700px]:w-[35px] 
            max-[700px]:h-[35px] max-[600px]:w-[50px] max-[600px]:h-[50px]"
          />
        </div>
        
        {/* Название домашней команды */}
        <span className="text-right text-[38.14px] font-semibold
         truncate pr-3 max-[1245px]:text-[28px] max-[860px]:text-[20px] 
         max-[700px]:text-[16px] max-[600px]:hidden">
          {m.homeTeam.shortName}
        </span>

        {/* Счёт */}
        <div className="flex justify-center items-center">
          <span className="text-center text-[38.14px] font-bold 
          bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg 
          min-w-[80px] max-[1245px]:text-[28px] max-[860px]:text-[20px] max-[700px]:text-[16px]">
            {m.score.fullTime.home}-{m.score.fullTime.away}
          </span>
        </div>

        {/* Название гостевой команды */}
        <span className="text-left text-[38.14px] font-semibold truncate 
        pl-3 bp1245:text-[20px] max-[1245px]:text-[28px] max-[860px]:text-[20px] 
        max-[700px]:text-[16px] max-[600px]:hidden">
          {m.awayTeam.shortName}
        </span>
        
        {/* Логотип гостевой команды */}
        <div className="flex justify-center max-[1245px]:justify-start">
          <img
            src={m.awayTeam.crest}
            alt={m.awayTeam.name}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-contain 
            transition-all duration-200 max-[970px]:w-[50px] 
            max-[970px]:h-[50px] max-[700px]:w-[35px] 
            max-[700px]:h-[35px] max-[600px]:w-[50px] max-[600px]:h-[50px]

            "
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