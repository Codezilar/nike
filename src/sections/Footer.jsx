import { copyrightSign } from '../assets/icons'
import {footerLogo} from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between item-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col item-start">
          <a className="" href="/">
            <img className="" width={150} height={46} src={footerLogo}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. 
            Find your perfect  size in store. Get Rewards.
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((icon) =>(
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <img className="" src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) =>(
            <div className="" key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-meduim">{section.title}</h4>
              <ul className="">
                {section.links.map((link) =>(
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a className="" href={link.link} >{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img className="rounded-full m-0" src={copyrightSign} alt='copy right' width={20} height={20}/>
          <p className="">Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer