import React from 'react'
import {FiMessageCircle} from 'react-icons/fi'
import {GrCertificate} from 'react-icons/gr'
import {AiOutlineGlobal} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'

const Support = () => {
  return (
    <section className='py-20 w-full bg-bgTblet bg-centerPos bg-cover bg-no-repeat relative'>
        {/* overlay */}
        <div className="darkOverlay absolute left-0 top-0 w-full h-full"></div>
    <article className='max-w-maxWidth px-5 mx-auto flex flex-col gap-10 lg:flex-row'>
        <div className='z-[99] relative h2 text-white text-center lg:pr-10 mb-5 md:text-left' data-aos-once="true" data-aos="fade-right" data-aos-duration="1000">
            <h6 className='h6 text-darkGreen'>WHY CHOOSE US</h6>
            <h2 className="z-[99] relative h2 text-white mb-5">Protecting your assets and your brand.</h2>
            <p className="z-[99] lg:text-[1rem] relative p mb-10 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-50" data-aos-once="true" data-aos="fade-left" data-aos-duration="1000">
            {/* item */}
                <div className='bg-lightBlue border-borderLight text-center rounded-xl p-7 flex flex-col items-center border hover:border-darkPurple transition-all ease-in duration-200'>
                    <div className='text-2xl lg:text-4xl mb-4 text-white bg-darkGreen rounded-md p-2'>
                        <FiMessageCircle />
                    </div>
                     <span className='capitalize text-md mb-2 lg:text-xl text-white font-medium tracking-wide md:text-md'>Free Consultations</span>
                    <p className='p lg:text-[1rem] text-white mb-0 font-light'>Lorem ipsum dolor, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            {/* item */}
                <div className='bg-lightBlue border-borderLight text-center rounded-xl p-7 flex flex-col items-center border hover:border-darkPurple transition-all ease-in duration-200'>
                    <div className='text-2xl lg:text-4xl mb-4 text-white bg-darkGreen rounded-md p-2'>
                        <GrCertificate />
                    </div>
                     <span className='capitalize text-md mb-2 lg:text-xl text-white font-medium tracking-wide md:text-md'>Certified Professional Expert</span>
                    <p className='p lg:text-[1rem] text-white mb-0 font-light'>Lorem ipsum dolor, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            {/* item */}
                <div className='bg-lightBlue border-borderLight text-center rounded-xl p-7 flex flex-col items-center border hover:border-darkPurple transition-all ease-in duration-200'>
                    <div className='text-2xl lg:text-4xl mb-4 text-white bg-darkGreen rounded-md p-2'>
                        <AiOutlineGlobal />
                    </div>
                     <span className='capitalize text-md mb-2 lg:text-xl text-white font-medium tracking-wide md:text-md'>Security on a Global Scale</span>
                    <p className='p lg:text-[1rem] text-white mb-0 font-light'>Lorem ipsum dolor, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            {/* item */}
                <div className='bg-lightBlue border-borderLight text-center rounded-xl p-7 flex flex-col items-center border hover:border-darkPurple transition-all ease-in duration-200'>
                    <div className='text-2xl lg:text-4xl mb-4 text-white bg-darkGreen rounded-md p-2'>
                        <BiPhoneCall />
                    </div>
                     <span className='capitalize text-md mb-2 lg:text-xl text-white font-medium tracking-wide md:text-md'>24/7 Premium Support</span>
                    <p className='p lg:text-[1rem] text-white mb-0 font-light'>Lorem ipsum dolor, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Support
