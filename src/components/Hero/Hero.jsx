import React from 'react'
import  './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion"
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition ={type:'spring',duration:3}
  const mobile =window.innerWidth<=768?true:false;
  return (
    <div className='hero' id='home'>
      <div className='blur hero-blur '></div>
       <div className='left-h'>
       <Header/>

       <div className='the-best-ad'>
       <motion.div
initial={{left:mobile?"165px":"238px"}}
whileInView={{left:'8px'}}
transition={{...transition,type:'tween'}}

      ></motion.div>
       <span>the best fitclub in the town!!</span>
       </div>
       <div className='hero-text'>
       <div>
       <span className='stroke-text'>Shape </span>
       <span>Your</span>
       </div>
       <div >
       <span>Ideal Body</span>
       </div>
       <div ><span>
       in here we will help you to shape and build your ideal body and live up your life to fullest
       </span>
       </div>
       </div> 
       <div  className='figures'>
       <div>
       <NumberCounter end={140} start={100}delay='4' preFix="+"/>
       <span>expert coches</span>
       </div>
       <div>
       <NumberCounter end={978} start={888}delay='4' preFix="+"/>
       <span>members joined</span>
       </div>
       <div>
       <NumberCounter end={ 88} start={67}delay='4' preFix="+"/>
       <span>fitness programs</span>
       </div>
       </div>
       <div className='hero-buttons'>
       <button className='btn'>Get started</button>
       <button className='btn'>Learn more</button>
       </div>

       </div>
       <div className='right-h'>
       <button className='btn'>join now</button>

       <motion.div
       initial={{right:"-1rem"}} 
       whileInView={{right:"4rem"}}
       transition={transition}
       className='heart-rate'>
       <img src={Heart} alt=''/>
       <span>Heart rate</span><span> 113 bpm</span>
       </motion.div >
       <img src={hero_image} alt='' className='hero-image'/>
       <motion.img 
       initial={{right:'11rem'}}
       whileInView={{right:"20rem"}}
       transition={transition}
       src={hero_image_back} alt='' className='hero-image-back'/>
       
       <motion.div 
       initial={{right:'37rem'}}
       whileInView={{right:"28rem"}}
       transition={transition}
       className='calories'>
       <img src={Calories} alt='' />
       <div>
       <span>Calories Burned</span><span>220kcal</span>
       </div> 
       </motion.div>
       
       </div>
    </div>
  )
}

export default Hero