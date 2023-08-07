import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <div className='m-6'>
        {/* //style="background-image: url('src/assets/6166234_17450.jpg')" */}
        <div className='md:flex md:cols-2 m-4 my-[40px] sm:m-6 sm:my-[70px] mx-4'>
          <div>
            <h1 className='text-4xl font-bold font-oswald my-10 mx-6'>Welcome to <br /><p className='text-4xl sm:text-6xl pt-6'> <span className='font-pacifico'><span className='text-red-900 font-bold '>Q</span>uick<span className='font-bold'>R</span>ead</span></p> </h1>
          </div>
          <div>
            <h2 className='max-w-[900px] my-10 font-bold text-2xl text-red-900 font-oswald sm:text-3xl md:mx-10'>Introducing an innovative AI-powered web app for effortless article summarization. Transform lengthy content into concise, insightful summaries, saving time and enhancing comprehension, unlock key insights efficiently, revolutionizing the way you consume information. </h2>
          </div>

        </div>
        <Link to='/ai'>
          <div className="flex justify-center my-2 m-2 mt-[40px]"><button type='button' className=' font-satoshi rounded-full border border-red-800 p-6 px-10 bg-red-600 text-white font-bold hover:bg-red-400 shadow-md shadow-slate-500 hover:border-black flex align-middle justify-between'><span className='px-1'>Try out now!</span></button>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Main