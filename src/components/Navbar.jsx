import { useState } from "react";
import { menu,logo,close } from "../assets";
import { navLinks } from "../constants";
import SignUpExpanded from "./SignUpExpanded";
import SignUpSmallDevices from "./SignUpSmallDevices";



navLinks

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="Analytics" className="h-[40px] w-[184.02px] mt-1.5" />

        <ul id="SMALL SCREEN SIZES" className="list-none lg:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] pt-[0.88rem] ${index === navLinks.length-1? 'mr-0' : 'mr-10'} text-secondary`}>
                    <a href={`#${nav.id}`} id="HoverPurpose" className={`font-roboto`}>{nav.title}</a>
                </li>
            ))}
         <li>
          <SignUpExpanded/>
          </li> 
        </ul>


        <div id="LARGE SCREEN SIZES" className="lg:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close: menu} alt="menu" className="w-[32px] h-[32px] object-contain" onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex': 'hidden'} p-6 bg-nav-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>

        <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] ${index === navLinks.length-1? 'mb-0' : 'mb-10'} text-dimWhite`}>
            <a href={`#${nav.id}`} className={`font-roboto`}>{nav.title}</a>
          </li>
        ))}
        <li>
         <SignUpSmallDevices/>
          </li> 
      </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar