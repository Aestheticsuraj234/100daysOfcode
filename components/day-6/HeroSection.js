import React from 'react'

const HeroSection = () => {
  return (

    <div className=" flex flex-col-reverse md:grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-3 lg:grid-cols-12 sm:mx-auto sm:justify-center sm:item-center">
        <div className="mr-auto place-self-center lg:col-span-7 justify-center items-center">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-[#eaeaee]">Launch Your Dev career With <span className="bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text"> Project-Based </span>  Learning </h1>
            <p className="max-w-2xl mb-6 text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-[#3B185F] font-normal">Showcase your skills with practical development experience and land the coding career of your dreams</p>
           
            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-100 rounded-lg hover:bg-blue-400 shadow-xl focus:ring-4 focus:ring-gray-100 bg-blue-500 dark:border-gray-700 dark:bg-gray-100 cursor-pointer ">
                Browse Product
            </a> 
        </div>
        <div className=" justify-center items-center lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fherobg.34afd3e4.png&w=1920&q=75" className='h-80 w-80 md:h-full md:w-full' alt="mockup"/>
      </div>                
    </div>

  )
}

export default HeroSection