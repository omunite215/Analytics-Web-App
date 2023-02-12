import React from 'react'
import styles from '../style';
import { features } from '../constants';

const MainFeatures = () => (
    <div className={`${styles.flexCenter} flex-col text-center pt-[38px]`}>
      <h1 className={`${styles.heading2}`}>Main Features</h1>
      <p className={`${styles.paragraph} w-[80%] pt-[30px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea veniam, officia alias incidunt quaerat dolores accusamus numquam ad fugit qui possimus! Totam placeat neque voluptate nobis eligendi iste quae, sint quam ex. Ut voluptatum sunt fugiat odit! Ullam recusandae debitis maiores illo deserunt fuga nisi.</p>
      <ul className="list-none sm:flex hidden flex-auto pt-2">
      {features.map((nav, index) => (
                <li key={nav.id} className={` pt-[0.88rem] py-[30px] text-white`}>
                  <div className={`${styles.flexCenter} flex-col pt-[30px] px-[50px]`}>
                    <img src={nav.icon} className="self-center"/>
                    <div className={`text-[16px] text-primary font-bold py-[15px]`}>{nav.title}</div>
                    <div className={`font-roboto text-secondary px-6`}>{nav.content}</div>
                    </div>
                </li>
            ))}
      </ul>

    </div>
  )


export default MainFeatures;

