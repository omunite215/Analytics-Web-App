import React from 'react'
import { pricings } from '../constants'
import styles from '../style'
import Order from './Order';

const Pricing = () => (
  <section className={`${styles.paddingY} ${styles.paddingX} bg-primary`}>
    <div id="SMALL SCREEN SIZES" className={`lg:hidden ${styles.flexCenter} bg-primary flex-col w-[100%] py-[50px]`}>
      <h1 className={`${styles.heading1} text-center pt-4`}>Pricing Plans</h1>
      <p className={`${styles.paragraph} text-center w-[300px] ss:w-[400px
      ]  xs:w-[600px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id maxime exercitationem iusto autem at impedit ipsa tempore, ea odio, qui adipisci nihil!</p>
      <div className="flex flex-col justify-center">
      {pricings.map((nav, index) => (
                <li key={nav.id} className={`list-none  ml-8 font-roboto font-normal text-[16px] mt-5 text-white`}>
              
                    <div className={`${styles.flexCenter} flex-col ${nav.id === "pricing-2" ? styles.pricingCardSelectedSD : styles.pricingCardDefaultSD} `}>
                      <h1 className="font-bold text-[30px]">{nav.title}</h1>
                    <p className={`text-secondary pt-[10px] pb-[37px]`}>{nav.users}</p>
                    <hr className="w-[220px] h-[1px] bg-[#2a407c] mb-[28px]"/>
                    <div className="flex text-center font-bold"><p className="text-[12px]">$</p><h1 className="text-[30px]">{nav.price}</h1></div>
                    <p className="text-secondary pt-[5px] text-[16px] text-center">{nav.time}</p>
                    <Order bg={`${nav.id === "pricing-2" ? "bg-pinky text-white border-none" : "bg-transparent"}`}/>
                    </div>
                    
                </li>
            ))}
            </div>
            <hr className="h-[1px] w-[1180px] bg-[#2a407c] mt-[100px]"/>
    </div>

    <div id="LARGE SCREEN SIZES" className={`hidden lg:${styles.flexCenter} lg:bg-primary lg:flex-col lg:w-[100%] lg:py-[50px]`}>
      <h1 className={`${styles.heading1} text-center pt-4`}>Pricing Plans</h1>
      <p className={`${styles.paragraph} w-[600px] text-center py-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id maxime exercitationem iusto autem at impedit ipsa tempore, ea odio, qui adipisci nihil!</p>
      <div className="flex justify-center">
      {pricings.map((nav, index) => (
                <li key={nav.id} className={`list-none font-roboto font-normal text-[16px] pt-[0.88rem] text-white`}>
              
                    <div className={`${styles.flexCenter} flex-col ${nav.id === "pricing-2" ? styles.pricingCardSelected : styles.pricingCardDefault} `}>
                      <h1 className="font-bold text-[30px]">{nav.title}</h1>
                    <p className={`text-secondary pt-[10px] pb-[37px]`}>{nav.users}</p>
                    <hr className="w-[220px] h-[1px] border-none bg-[#2a407c] mb-[28px]"/>
                    <div className="flex text-center font-bold"><p className="text-[12px]">$</p><h1 className="text-[30px]">{nav.price}</h1></div>
                    <p className="text-secondary pt-[5px] text-[16px] text-center">{nav.time}</p>
                    <Order bg={`${nav.id === "pricing-2" ? "bg-pinky text-white border-none" : "bg-transparent"}`}/>
                    </div>
                    
                </li>
            ))}
            </div>
            <hr className="h-[1px] w-[1180px] bg-[#2a407c] mt-[100px]"/>
    </div>
    </section>
    
  )


export default Pricing