import React from "react";
import styles from "./style";
import {Navbar, Hero, MainFeatures, Details, Pricing, Footer} from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} top-0`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Hero/>
      </div>
    </div>

    <div className={``}>
      <MainFeatures/>
      <Details/>
      <div className="absolute h-[10px] content-none w-[100%] bg-pinky self-end"/>
      <Pricing/>
      <Footer/>

    </div>

  </div>

    
  )


export default App
