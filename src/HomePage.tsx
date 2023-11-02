
import samplePic from './assets/luffysample.jpg'
import { DiCss3, DiHtml5, DiJsBadge, DiReact,  } from "react-icons/di";
import { TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";




const HomePage = () => {

  const skill = [
    { name: <DiHtml5 size={36} class=" text-orange-500" />, text: "HTML" },
    { name: <DiCss3 size={36} class=" text-blue-600" />, text: "CSS" },
    { name: <DiJsBadge size={36} class=" text-yellow-400" />, text: "JavaScript" },
    { name: <DiReact size={36} class=" text-sky-400" />, text: "React" },
    { name: <TbBrandTailwind size={36} class=" text-sky-400" />, text: "Tailwind" },
    { name: <TbBrandTypescript size={36} class=" text-blue-500" />, text: "Typescript" },

    ];

  return (
    <div id='home' className="w-full max-lg:mt-10 h-[50rem] flex flex-col mx-lg:items-center justify-center max-md:text-center">
      <div className='flex flex-col md:flex-row max-lg:items-center max-md:justify-center'>
        <div className=" space-y-2 md:flex md:flex-col md:w-[50%] md:ml-[5%] lg:ml-[10%] md:py-10 md:pl-5">
            <h1 className=" text-lg font-pop ">Hello! The name is</h1>
            <h1 className="text-3xl font-pop font-semibold ">Bern Ricel Musngi</h1>
            <h1 className=" text-sm font-pop font-thin px-5 md:px-0 ">Aspiring Frontend React Developer from the Philippines.</h1>
            
            <div className="flex max-md:justify-center">
              <button className="px-12 py-5 my-8 flex justify-center items-center border-solid  border-cyan-300 border-2  rounded-full text-cyan-600"><div className="absolute border-solid px-[1rem] py-1 border border-cyan-300 rounded-full">Projects</div></button>
            </div>
        </div>
        
      <img src={samplePic} className=' aspect-square object-cover w-[20rem] md:mr-auto rounded-lg'></img>
      </div>
        <div className='w-full flex flex-col md:flex-row items-center py-5 md:ml-[5%] lg:ml-[10%]'>
          <h1 className=' font-pop m-5 font-bold text-xl '>Tech Stack:</h1>
          <ul className='flex'>
              {skill.map((text) => (
                <li>
                  <div className=' mx-3'>{text.name}</div>
                </li>
              ))}
          </ul>
        </div>
    </div>
  ) 
}
export default HomePage