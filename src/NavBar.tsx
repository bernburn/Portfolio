import { Link as ScrollLink } from "react-scroll";

import {
  Home,
  User,
  Folder,
  MessageSquare,
  Mail,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const links = [
    { name: <Home size={22} strokeWidth={2.5} />, link: "home" },
    { name: <User size={22} strokeWidth={2.5} />, link: "about" },
    { name: <Folder size={22} strokeWidth={2.5} />, link: "projects" },
    { name: <MessageSquare size={22} strokeWidth={2.5} />, link: "/" },
    { name: <Mail size={22} strokeWidth={2.5} />, link: "/" },
  ];

  const [slide, setSlide] = useState(true);

  return (
    <>
      <nav
        className={`flex justify-center items-center static bottom-0 max-lg:bg-slate-50 max-lg:left-0 right-0 lg:absolute lg:top-0 lg:bottom-0 "
        }`}
      >
        <button
          onClick={() => setSlide(!slide)}
          className={`max-lg:hidden lg:p-5 flex justify-center items-center fixed lg:mr-2 hover:scale-[1.2] transition-[all_duration_500_ease-in-out] ${
            slide ? "lg:right-20" : "lg:right-1"
          }`}
        >
          <div className="lg:absolute lg:left-0 lg:px-[0.25rem] lg:py-4 lg:rounded-full  lg:bg-slate-50 border border-solid border-slate-200 ">
            {slide ? <ChevronRight /> : <ChevronLeft />}
          </div>
        </button>

        <ul
          className={`max-lg:w-full flex flex-row fixed max-lg:bottom-0 lg:flex-col justify-center items-center lg:py-5 lg:px-1 lg:rounded-full space-x-1 sm:space-x-5 md:space-x-10 lg:space-x-0 lg:border-solid border lg:border-slate-200 bg-slate-50 transition-[all_duration_500_ease-in-out] ${
            slide ? "lg:right-8" : "lg:right-[-50px]"
          } `}
        >
          {/* mapped this because of tailwind css (hurts my eyes), though I prob shouldn't have but I'm too lazy to make it static again.*/}
          {links.map((link, index) => (
            <li key={index} className={`py-4 lg:py-4 px-4 lg:px-2 rounded-3xl transition-[scale_100_ease-in-out] hover:scale-[1.6] `}>
              <ScrollLink
                to={link.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

{
  /* <a href="#"><li className='cursor-pointer flex justify-center'><button className='py-4 lg:py-4 px-4 lg:px-2 rounded-3xl focus:text-teal-500 transition-[scale_100_ease-in-out] hover:scale-[1.6]'><Home size={22} strokeWidth={2.5} /></button></li></a>
                    <a href="#"><li className='cursor-pointer flex justify-center'><button className='py-4 lg:py-4 px-4 lg:px-2 rounded-3xl focus:text-teal-500 transition-[scale_100_ease-in-out] hover:scale-[1.6]'><User size={22} strokeWidth={2.5} /></button></li></a>
                    <a href="#"><li className='cursor-pointer flex justify-center'><button className='py-4 lg:py-4 px-4 lg:px-2 rounded-3xl focus:text-teal-500 transition-[scale_100_ease-in-out] hover:scale-[1.6]'><Folder size={22} strokeWidth={2.5} /></button></li></a>
                    <a href="#"><li className='cursor-pointer flex justify-center'><button className='py-4 lg:py-4 px-4 lg:px-2 rounded-3xl focus:text-teal-500 transition-[scale_100_ease-in-out] hover:scale-[1.6]'><MessageSquare size={22} strokeWidth={2.5} /></button></li></a>
                    <a href="#"><li className='cursor-pointer flex justify-center'><button className='py-4 lg:py-4 px-4 lg:px-2 rounded-3xl focus:text-teal-500 transition-[scale_100_ease-in-out] hover:scale-[1.6]'><Mail size={22} strokeWidth={2.5} /></button></li></a> */
}
