import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Hero from './Components/Hero/Hero'

const App = () => {
  
  let heroData = [
    {text1: "CAR ONE", text2: "New Product"},
    {text1: "CAR TWO", text2: "Latest Product"},
    {text1: "CAR THREE", text2: "Old Product"}
  ]

  const [heroStatus, setheroStatus] = useState(0)
  const [playStatus, setplayStatus] = useState(false)

  useEffect(() => {
   setInterval(() => {
    setheroStatus((count)=>{
      return count === 2 ? 0 : count +1;
    })
   }, 3000);
  }, [])
  

  return (
    <div>
      <Background heroStatus = {heroStatus} playStatus = {playStatus} />
      <Hero 
      heroData = {heroData [heroStatus]} 
      heroStatus = {heroStatus} 
      playStatus = {playStatus} 
      setheroStatus = {setheroStatus} 
      setplayStatus = {setplayStatus} />
    </div>
  )
}

export default App