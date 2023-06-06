import React from 'react'
import {GiCheckedShield} from 'react-icons/gi'
import {BsBug} from 'react-icons/bs'
import {RiStarHalfFill} from 'react-icons/ri'
const Dangers = () => {
  return (
    <section className='py-20'>
        <article className='max-w-maxWidth mx-auto px-5'>
            <div className='py-10 md:py-14 rounded-lg overlayBg'>
                <div className='z-[99] text-white text-center mb-20 max-w-[80%] lg:max-w-[70%] mx-auto'>
                        <h2 className="h2 mb-5 text-white" data-aos={'fade-up'}  data-aos-duration="1000" data-aos-once="true">Protecting you from the dangers of cyberspace</h2>
                        <p className='p text-white font-light' data-aos={'fade-up'} data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="flex flex-col items-center md:flex-row space-y-5 md:space-y-0 ">
                    <div className='flex flex-col items-center justify-center text-center md:border-r-4 border-[#FFFFFF2B]' 
                    data-aos={'slide-right'} data-aos-duration="1000" data-aos-once="true">
                        <span className='p-2 md:p-4 bg-darkGreen rounded-lg mb-3'>
                            <GiCheckedShield className='text-2xl lg:text-4xl text-white' />
                        </span>
                        <span className='text-xl md:text-2xl text-white font-light mb-3'>Trusted security</span>
                        <p className='p mb-0 text-white md:px-10 lg:px-16'>Aliquet curae auctor fringilla ultricies sit sodales cubilia curabitur tellus</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center md:border-r-4 border-[#FFFFFF2B]'
                     data-aos={'slide-down'} data-aos-duration="1000" data-aos-once="true">
                        <span className='p-2 md:p-4 bg-darkGreen rounded-lg mb-3'>
                            <BsBug className='text-2xl lg:text-4xl text-white' />
                        </span>
                        <span className='text-xl md:text-2xl text-white font-light mb-3'>47M+ Threats Blocked</span>
                        <p className='p mb-0 text-white md:px-10 lg:px-16'>Aliquet curae auctor fringilla ultricies sit sodales cubilia curabitur tellus</p>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center'  data-aos={'slide-left'} data-aos-duration="1000" data-aos-once="true">
                        <span className='p-2 md:p-4 bg-darkGreen rounded-lg mb-3'>
                            <RiStarHalfFill className='text-2xl lg:text-4xl text-white' />
                        </span>
                        <span className='text-xl md:text-2xl text-white font-light mb-3'>4.8+ Rating</span>
                        <p className='p mb-0 text-white md:px-10 lg:px-16'>Aliquet curae auctor fringilla ultricies sit sodales cubilia curabitur tellus</p>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Dangers
