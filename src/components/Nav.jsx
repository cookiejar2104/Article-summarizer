import React from 'react'
//import {fiGithub} from 'react-icons/fi';
import { FiGithub } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className=' bg-red-400 p-6  font-bold font-satoshi  text-white  flex justify-between shadow-md shadow-slate-400 '>
        <ul className='flex align-middle justify-left '>
            <li className=' text-3xl font-pacifico'><span className='text-red-900 font-bold '>Q</span>uick<span className='font-bold'>R</span>ead</li>
            <li className=' text-[20px] mx-6 font-courgette pt-2'>Articles, made easy</li>
            
        </ul>
        {<button type='button' className=' font-satoshi rounded-full border border-red-800 p-2 px-4 bg-red-600 text-white hover:bg-transparent hover:border-black flex align-middle justify-between'><span className='px-1'>Source</span><FiGithub className='mt-1'/></button>}
      </nav>
  )
}

export default Nav