// components/Header.js
"use client";
import React from 'react';
import Image from 'next/image';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (

    <header className="container-custom rounded-[20px] font-ttRuns  ">
      <div className="pt-[74px] 
      max-[846px]:pt-[40px]

      ">
      <div className="container-custom h-[83px] 
       rounded-[15px] bg-[#D9D9D9]/30 flex items-center justify-around 
       max-[500px]:gap-x-[15px]">
        

        <div className="flex flex-row items-center justify-center gap-x-[11px]">
        <img src="/img/fc-barcelona-logo.svg" alt="logo" 
        className='
    w-[90px] h-[90px] max-[500px]:w-[80px] max-[500px]:h-[70px] 
     max-[425px]:w-[60px] max-[425px]:h-[30px] 
     max-[375px]:hidden
    '
        />
        </div>
       
       <nav className="text-white text-[20px] 2xl:text-[24px] gap-x-[77px]  md:flex nav-gap-responsive-1346 nav-gap-responsive-1176
       max-[768px]:flex max-[768px]:gap-x-[5px]
       ">
  <a
    href="#"
    className="
      relative pb-[7px] 
      hover:text-blue-400 
      hover:after:absolute hover:after:left-0 hover:after:right-0 
      hover:after:bottom-0 hover:after:h-[2px] 
      hover:after:bg-blue-400 hover:after:content-['']
      max-[845px]:text-base
      max-[425px]:text-xs
    "
  >
    HOME
  </a>
  <a
    href="#"
    className="
      relative pb-[7px] 
      hover:text-blue-400 
      hover:after:absolute hover:after:left-0 hover:after:right-0 
      hover:after:bottom-0 hover:after:h-[2px] 
      hover:after:bg-blue-400 hover:after:content-['']
      max-[845px]:text-base
      max-[425px]:text-xs
    "
  >
    MATCHES
  </a>
  <a
    href="#"
    className="
      relative pb-[7px] 
      hover:text-blue-400 
      hover:after:absolute hover:after:left-0 hover:after:right-0 
      hover:after:bottom-0 hover:after:h-[2px] 
      hover:after:bg-blue-400 hover:after:content-['']
      max-[845px]:text-base
      max-[425px]:text-xs
    "
  >
    PLAYERS
  </a>

</nav>

        
      <div className="relative w-full max-w-sm input-custom-size
       max-[768px]:hidden
      ">
      <span className="absolute inset-y-0 left-2 flex items-center cursor-pointer">
        <MagnifyingGlassIcon className="w-5 h-5 text-white" />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="input-placeholder bg-transparent w-full h-full pl-9 pr-3 rounded-md text-sm placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-black text-center"
      />
    </div>
    </div>
      </div>
      <div className="font-ttRuns min-h-screen flex flex-col justify-center  max-w-[1640px] mx-auto px-4">
    
  {/* Обертка текста с max-width и фоном */}
  <div className="inline-block  max-w-[600px] px-4 py-2 rounded-[7.4px] bg-[#D9D9D9]/20
  max-[846px]:flex
  max-[846px]:flex-col
  max-[846px]:gap-y-[20px]

  ">
    <h1 className="text-[93.94px] font-ttRuns leading-[127px] text-white
    max-[846px]:text-[60px]
     max-[846px]:leading-[50px]
     max-[500px]:text-[35px]
    ">Soccer</h1>
    <h2 className="text-[63.64px] font-ttRuns-200 leading-[86px] text-white
    max-[846px]:text-[40px] 
    max-[846px]:leading-[50px]
    max-[500px]:text-[25px]
    max-[500px]:leading-none
    ">more than a game</h2>
  </div>

 <button className="
    font-ttRuns-200 
    btn-gradient mt-[179px] self-start px-6 py-3 rounded 
    bg-blue-600 text-white font-semibold cursor-pointer max-[846px]:text-[20px] 
    max-[846px]:leading-none max-[846px]:p-20 max-[500px]:text-[16px] 
    btn-gradient-media 
     max-[503px]:mt-[120px]
">
    Learn more
</button>
  </div>
    </header>
  );
}
