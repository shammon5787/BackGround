import React from 'react'
import video from '../../assets/video.mp4'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

const Background = ({heroStatus, playStatus}) => {
 
        if(playStatus) {
             return (
                <video className='w-full fixed transition-all duration-500'  autoPlay loop muted >
                    <source src= {video} type='video/mp4' />
                </video>
            )
        }else if(heroStatus === 0){
            return (
                <img className='w-full fixed top-0 left-0  transition-all duration-500' src= {img1} alt="" />
            )
        }else if(heroStatus === 1){
            return (
                <img className='w-full fixed top-0 left-0 transition-all duration-500' src= {img2} alt="" />
            )
        }else if(heroStatus === 2){
            return (
                <img className='w-full fixed top-0 left-0 transition-all duration-500' src= {img3} alt="" />
            )
        }
    }

export default Background