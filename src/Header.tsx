import { Github, Linkedin } from 'lucide-react'

const Header = () => {
  return (
    <header className=' z-10 flex w-full h-14 md:h-11 items-center fixed top-0 bg-gradient-to-r from-slate-50 to-slate-100'>
        <h1 className=' font-pop font-bold text-xl pl-8 sm:pl-16 mr-auto'>Burn</h1>
        <ul className='flex pr-5 sm:pr-16'>
            <a href='https://github.com/bernburn' className=''><button className='p-2'><li ><Github /></li></button></a>
            <a href='https://www.linkedin.com/in/bern-ricel-musngi-3492ba291/'><button className='p-2'><li ><Linkedin /></li></button></a>
            <li></li>
        </ul>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
    </header>
  )
}

export default Header