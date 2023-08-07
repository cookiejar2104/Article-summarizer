import React from 'react'
import { Link } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className=' bg-red-400 p-2 sm:p-6  font-bold font-satoshi  text-white  flex justify-between shadow-md shadow-slate-400 '>
        <ul className=' sm:flex align-middle justify-left '>
        
        <Link to='/'>
            <li className=' text-2xl sm:text-3xl font-pacifico'><span className='text-red-900 font-bold '>Q</span>uick<span className='font-bold'>R</span>ead</li>
        </Link>
            <li className=' sm:text-[20px] mx-2 sm:mx-6 font-oswald pt-2'>Articles, made easy</li>
            
        </ul>
        <Link to='https://github.com/cookiejar2104/Article-summarizer'>
        <button type='button' className=' font-satoshi rounded-full border border-red-800 p-2 px-4 bg-red-600 text-white hover:bg-transparent hover:border-black flex align-middle justify-between shadow-md shadow-red-700'><span className='px-1'>Source</span><FiGithub className='mt-1'/></button>
        </Link>
      </nav>
  )
}

export default Nav