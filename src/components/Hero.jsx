import React from 'react'
import { mainChart } from '../assets'
import styles from '../style'
import TryButton from './TryButton'

const Hero = () => {
  return (
    <div className="flex-1 flex-col">
    <section className="flex flex-col">
      <div className="flex">
      <div className="flex flex-col w-[50%] items-start justify-start pt-[50px]  pl-[230px] bg-transparent">
        <h1 className={`${styles.heading1} `}>Monitor your Business<br/>on real-time dashboard</h1>
        <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque maiores laboriosam ea eius velit facere eligendi a! Eum, consectetur aperiam? Cumque, consequatur!</p>
       <div className={``}>
       <TryButton/>
       </div>
      </div>
      <div className="flex-1 z-[1] flex-row mr-0 overflow-visible drop-shadow-xl">
      <img src={mainChart}/>
      </div>
      <div className="absolute h-[10px] content-none w-[100%] bg-pinky self-end"/>
      </div>
      
      

      
    </section>
    

    </div>
  )
}

export default Hero