import React from 'react'
import { pricings } from '../constants'
import styles from '../style'
import Order from './Order';

const Pricing = () => (
    <div className={`${styles.flexCenter} bg-primary flex-col w-[100%] py-[50px]`}>
      <h1 className={`${styles.heading1} text-center pt-4`}>Pricing Plans</h1>
      <p className={`${styles.paragraph} w-[600px] text-center py-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id maxime exercitationem iusto autem at impedit ipsa tempore, ea odio, qui adipisci nihil!</p>
      <div className="flex justify-center">
      {pricings.map((nav, index) => (
                <li key={nav.id} className={`list-none font-roboto font-normal text-[16px] pt-[0.88rem] text-white`}>
              
                    <div className={`${styles.flexCenter} flex-col ${nav.id === "pricing-2" ? styles.pricingCardSelected : styles.pricingCardDefault} `}>
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
    
  )


export default Pricing