import React from 'react'

const Main = () => {
  return (
    <>
    <div className='m-6'>
      {/* //style="background-image: url('src/assets/6166234_17450.jpg')" */}
    <div className='m-6 my-[70px]'>
    <h1 className='text-4xl font-bold'>Welcome to <span className='font-pacifico'><span className='text-red-900 font-bold '>Q</span>uick<span className='font-bold'>R</span>ead</span> </h1>
    <h2 className='max-w-[900px] my-4 font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi dolorum sit a voluptas unde culpa, laudantium dolor temporibus iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores.</h2>
    </div>
    <div className="flex justify-center my-6 m-6 mt-[100px]"><button type='button' className=' font-satoshi rounded-full border border-red-800 p-6 px-10 bg-red-600 text-white font-bold hover:bg-red-400 shadow-md shadow-slate-400 hover:border-black flex align-middle justify-between'><span className='px-1'>Try out now!</span></button></div>
    </div>
    </>
  )
}

export default Main