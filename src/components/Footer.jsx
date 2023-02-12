import { logo } from "../assets";
import { navLinks, socialMedia } from "../constants";
import { Instagram, Facebook, Twitter } from "../assets";


const Footer= () => {
  return (
    <footer className="w-full flex py-[50px] justify-between items-center navbar bg-primary ">
        <img src={logo} alt="Analytics" className="max-h-[80px] max-w-[120px] mt-3 mb-2 mr-[81.98px] ml-[210px] pt-1 opacity-[0.7]" />

        <ul className="list-none sm:flex hidden flex-auto mb-2 ml-[5%]">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] pt-[0.88rem] ${index === navLinks.length-1? 'mr-0' : 'mr-10'} text-white`}>
                    <a href={`#${nav.id}`} className={`font-roboto text-secondary`}>{nav.title}</a>
                </li>
            ))}
        

        </ul>
        <ul className="list-none sm:flex hidden flex-auto mb-2 ml-[5%] pt-2">
            {socialMedia.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] pt-[0.88rem] ${index === socialMedia.length-1? 'mr-0' : 'mr-10'} text-white`}>
                  <a  href={nav.link} target="_blank"><img src={nav.icon} className="w-[20px] h-[20px] mx-1"/></a> 
                </li>
            ))}
        

        </ul>
    </footer>
  )
}

export default Footer;