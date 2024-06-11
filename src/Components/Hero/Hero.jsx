import React from 'react'
import arrow from '../../assets/arrow.png'
import play from '../../assets/play.png'
import puse from '../../assets/puse.png'

const Hero = ({heroData, heroStatus, playStatus, setheroStatus, setplayStatus}) => {
  return (
    <>
    <div className='absolute top-[150px] left-20 bg-slate-700  opacity-90 w-[300px] rounded-md'>
        <div className='m-3'>
            <h1 className='text-white font-bold text-3xl' > {heroData.text1} </h1>
            <h1 className='text-white font-semibold text-3xl' > {heroData.text2} </h1>
        </div>
        <div className='m-3 flex items-center gap-5 bg-white py-5 rounded-md'>
            <input className='p-2 rounded-md outline-none' name="search" placeholder='Search for new' id="car" />
            <img className='w-8 rounded-full cursor-pointer' src={arrow} alt="" />
        </div>
       <div>
        <ul className='gap-6 m-3 flex'>
            <li onClick={()=>setheroStatus(0)} className={` text-3xl font-bold cursor-pointer items-center justify-center ml-3 rounded-full w-6 h-6 ${heroStatus === 0 ? "text-blue-800" : "text-black" }`}  >O</li>

            <li onClick={()=>setheroStatus(1)} className={` text-3xl font-bold cursor-pointer items-center justify-center ml-3 rounded-full w-6 h-6 ${heroStatus === 1 ? "text-blue-800" : "text-black" }`} >O</li>

            <li onClick={()=>setheroStatus(2)} className={` text-3xl font-bold cursor-pointer items-center justify-center ml-3 rounded-full w-6 h-6 ${heroStatus === 2 ? "text-blue-800" : "text-black" }`} >O</li>
        </ul>
       </div>
    </div>
       <div className='absolute right-10 bottom-10 bg-black opacity-70 rounded-md flex flex-col items-center'>
        <img onClick={()=>setplayStatus(!playStatus)} className={` w-[30px] rounded-full cursor-pointer m-2`} src= {!playStatus ? play : puse} alt="" />
        <p className='text-white font-bold m-2 '>See Video</p>
       </div>
    </>
  )
}

export default Hero