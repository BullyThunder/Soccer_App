// components/Header.js
import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (

    <header className="container-custom rounded-[20px] backdrop-blur-sm  font-ttRuns bg-[#D9D9D9]/30 ">
      <div className="container-custom font-ttRuns min-h-screen flex flex-col justify-center max-w-[1640px] mx-auto px-4">

  {/* Обертка текста с max-width и фоном */}
  <div className="inline-block max-w-[600px] px-4 py-2 rounded-[7.4px] bg-[#D9D9D9]/20">
    <h1 className="text-[93.94px] font-ttRuns leading-[127px] text-white">ФУТБОЛ</h1>
    <h2 className="text-[63.64px] font-ttRuns-200 leading-[86px] text-white">больше, чем игра</h2>
  </div>

  <button className="font-ttRuns-200 btn-gradient mt-[179px]  self-start px-6 py-3 rounded bg-blue-600 text-white font-semibold cursor-pointer">
    Узнать больше
  </button>
  </div>
      <div className="container-custom flex items-center justify-between ">
        {/* Логотип */}
        <div className="flex flex-row items-center justify-center gap-x-[11px]">
        <img src="/img/header_logo.svg" alt="logo" width={100} height={40} />
        <div className="flex flex-col text-white text-[19.31px] leading-[26px] tracking-[-1px]">
        <span>FOOTBALL</span>
        <span>CLUB</span>
        </div>
        </div>
        {/* Навигация */}
       <nav className="text-white text-[20px] 2xl:text-[26px] gap-x-[85px] hidden md:flex nav-gap-responsive-1346 nav-gap-responsive-1176">
  <a
    href="#"
    className="
      relative pb-[7px] 
      hover:text-blue-400 
      hover:after:absolute hover:after:left-0 hover:after:right-0 
      hover:after:bottom-0 hover:after:h-[2px] 
      hover:after:bg-blue-400 hover:after:content-['']
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
    "
  >
    PLAYERS
  </a>
  <a
    href="#"
    className="
      relative pb-[7px] 
      hover:text-blue-400 
      hover:after:absolute hover:after:left-0 hover:after:right-0 
      hover:after:bottom-0 hover:after:h-[2px] 
      hover:after:bg-blue-400 hover:after:content-['']
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
    "
  >
    HISTORY
  </a>
  <a
    href="#"
    className="
      relative pb-[7px] 
      hover:text-blue-400 
      hover:after:absolute hover:after:left-0 hover:after:right-0 
      hover:after:bottom-0 hover:after:h-[2px] 
      hover:after:bg-blue-400 hover:after:content-['']
    "
  >
    CONTACTS
  </a>
</nav>



        {/* Поиск */}
      <div className="relative w-full max-w-sm input-custom-size ">
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
    </header>
  );
}
