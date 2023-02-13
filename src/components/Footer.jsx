import { logo } from "../assets";
import { navLinks, socialMedia } from "../constants";
import { Instagram, Facebook, Twitter } from "../assets";
import styles from "../style";


const Footer= () => {
  return (
    <footer className={` ${styles.paddingY} ${styles.paddingX} w-full navbar bg-primary`}>
      <section className={`lg:hidden ${styles.flexCenter} flex-col`}>
        <img src={logo} alt="Analytics" className="grayscale max-h-[120px] max-w-[160px] mt-3 mb-2 m-auto pt-1 opacity-[0.7]" />

        <ul className={`${styles.flexCenter} list-none flex-1 flex-col m-auto`}>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] py-5 text-white`}>
                    <a id="HoverPurpose" href={`#${nav.id}`} className={`font-roboto text-secondary`}>{nav.title}</a>
                </li>
            ))}
        

        </ul>
        <ul className="list-none py-10 m-auto">
            {socialMedia.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal  cursor-pointer text-[16px] py-5 text-white`}>
                  <a id="HoverPurpose"  href={nav.link} target="_blank"><img src={nav.icon} className="w-[22px] h-[22px]"/></a> 
                </li>
            ))}
        </ul>
        </section>

        <section className={`hidden lg:${styles.flexCenter}`}>
        <img src={logo} alt="Analytics" className="grayscale max-h-[80px] max-w-[120px] mt-3 mb-2 mr-[81.98px] ml-[210px] pt-1 opacity-[0.7]" />

        <ul className={`${styles.flexCenter} list-none sm:flex hidden flex-auto ml-[5%]`}>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-roboto font-normal cursor-pointer text-[16px] ${index === navLinks.length-1? 'mr-0' : 'mr-10'} text-white`}>
                    <a id="HoverPurpose" href={`#${nav.id}`} className={`font-roboto text-secondary`}>{nav.title}</a>
                </li>
            ))}
        

        </ul>
        <ul className="list-none sm:flex hidden flex-auto mb-2 ml-[5%] pt-2">
            {socialMedia.map((nav, index) => (
                <li key={nav.id} id="HoverPurpose" className={`font-roboto font-normal cursor-pointer text-[16px] ${index === socialMedia.length-1? 'mr-0' : 'mr-10'} text-white`}>
                  <a  href={nav.link} target="_blank"><img src={nav.icon} className="w-[22px] h-[22px]"/></a> 
                </li>
            ))}
        </ul>
        </section>
    </footer>
  )
}

export default Footer;