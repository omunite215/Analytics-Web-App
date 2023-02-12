import React from 'react'
import styles from '../style'
import { Detail } from '../constants'

const Details = () =>  (
    <div className={`${styles.flexCenter} flex-col pt-[80px]`}>
       {Detail.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] pt-[0.88rem] text-white`}>
                    <div className="flex flex-1 px-[50px]">
                    <div className="flex flex-1 flex-col">
                    <div className={`text-[40px] w-[75%] text-primary font-bold pb-5`}>{nav.title}</div>
                    <div className={`${styles.paragraph} w-[80%]`}>{nav.content}</div>
                    </div>
                    <img src={nav.img} alt="Reports" className="h-[410px] w-[600px]" />
                    </div>
                    

                </li>
            ))}



    </div>
  )


export default Details