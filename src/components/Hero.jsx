import React from 'react'
import { mainChart } from '../assets'
import styles from '../style'
import TryButton from './TryButton'

const Hero = () => {
  return (
      <section className={`flex ${styles.paddingY} ${styles.paddingX}`}>
        <div id="SMALL SCREEN SIZES" className={`lg:hidden ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.flexCenter} flex-col w-[100%] pt-[35px] bg-transparent`}>
            <h1 className={`${styles.heading1} text-center `}>Monitor your Business<br/>on real-time dashboard</h1>
            <p className={`${styles.paragraph} text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque maiores laboriosam ea eius velit facere eligendi a! Eum, consectetur aperiam? Cumque, consequatur!</p>
            <div className={``}>
              <TryButton />
            </div>
          </div>
          <div className="hidden flex-1 z-[1] flex-row mr-0 overflow-visible drop-shadow-xl">
            <img src={mainChart} className="hidden ml-auto" />
          </div>
        </div>
        <div id="LARGE SCREEN SIZES" className="hidden lg:flex">
          <div className={`${styles.flexStart} flex-col w-[50%] pl-16 pt-[35px] bg-transparent`}>
            <h1 className={`${styles.heading1} `}>Monitor your Business<br/>on real-time dashboard</h1>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque maiores laboriosam ea eius velit facere eligendi a! Eum, consectetur aperiam? Cumque, consequatur!</p>
            <div className={``}>
              <TryButton />
            </div>
          </div>
          <div className="flex-1 z-[1] flex-row mr-0 overflow-visible drop-shadow-xl">
            <img src={mainChart} className="block ml-auto" />
          </div>
        </div>
      </section>
      
  )
}

export default Hero