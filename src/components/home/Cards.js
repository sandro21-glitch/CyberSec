import React from 'react'
import {GiCheckedShield} from 'react-icons/gi'
import {RiBriefcase4Line} from 'react-icons/ri'
const Cards = () => {
  return (
    <section className='max-w-maxWidth mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* card */}
        <div className='flex flex-col items-start bg-white p-8 rounded-lg -translate-y-20'>
            <div className='p-3 bg-darkGreen rounded-md mb-5'>
                <GiCheckedShield className='text-2xl lg:text-4xl text-white' />
            </div>
            <span className='text-xl md:text-2xl lg:text-3xl font-semibold mb-5'>
                For Home
            </span>
            <p className='p text-lg lg:text-xl font-thin'>Protection for PCs, Macs, mobile devices and smart home.</p>
            <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-2 rounded-md text-sm
                    hover:bg-darkPurple transition-colors ease-in duration-150'>Discover More</button>
        </div>
        {/* card */}
        <div className='flex flex-col items-start overlayBg p-8 rounded-lg -translate-y-20'>
            <div className='p-3 bg-white rounded-md mb-5'>
                <RiBriefcase4Line className='text-2xl lg:text-4xl text-darkGreen' />
            </div>
            <span className='text-xl md:text-2xl lg:text-3xl font-semibold mb-5 text-white'>
                For Business
            </span>
            <p className='p text-lg lg:text-xl font-thin text-white'>Choose our security platform or managed service to become a more cyber resilient business.</p>
                <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-2 rounded-md text-sm
                    hover:bg-darkPurple transition-colors ease-in duration-150'>
                        Discover More
                </button>
        </div>
    </section>
  )
}

export default Cards
