import { logo } from "../assets";
import { navLinks } from "../constants";
import Signup from "./Signup";

navLinks

const Navbar = () => {
  return (
    <nav className="w-full flex py-[50px] justify-between items-center navbar">
        <img src={logo} alt="Analytics" className="max-h-[40px] max-w-[184.02px] mt-2 mr-[81.98px] ml-[210px]" />

        <ul className="list-none sm:flex hidden flex-1">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] pt-[0.88rem] ${index === navLinks.length-1? 'mr-0' : 'mr-10'} text-white`}>
                    <a href={`#${nav.id}`} className={`font-roboto text-secondary`}>{nav.title}</a>
                </li>
            ))}
         <li>
         <Signup/>
          </li> 

        </ul>

    </nav>
  )
}

export default Navbar