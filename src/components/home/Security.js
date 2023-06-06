import React from 'react'
import {AiOutlineGlobal,AiOutlineWifi} from 'react-icons/ai';
import {BsSpeedometer2,BsFingerprint} from 'react-icons/bs';

const Security = () => {
  return (
    <section className='py-10'>
      <article className='max-w-maxWidth mx-auto px-5'>
        {/* grid content */}
        <div data-aos="fade-up" data-aos-once="true" data-aos-offset="10" data-aos-duration="1000" className='grid grid-cols-2 lg:grid-cols-4 bg-lightBlue border border-borderLight rounded-xl p-2'>
            {/* grid item */}
            <div className='p-5 text-center flex flex-col lg:flex-row lg:text-left items-center border-r border-b lg:border-b-0 border-borderLight'>
                {/* icon-wrapper */}
                <div className='mb-5 lg:mb-0 lg:mr-5 bg-main-bg p p-2 lg:p-4 rounded-md'>
                    <AiOutlineGlobal className='text-darkGreen text-2xl lg:text-4xl' />
                </div>
                <div>
                    <span className='uppercase text-darkGreen font-extralight tracking-widest text-xs md:text-md'>INTERNET SECURITY</span>
                    <p className='p text-white mb-0 font-light'>Ac condimentum at accumsan ante sed morbi</p>
                </div>
            </div>
            {/* grid item */}
            <div className='p-5 text-center flex flex-col lg:flex-row lg:text-left items-center border-b lg:border-b-0 lg:border-r border-borderLight'>
                {/* icon-wrapper */}
                <div className='mb-5 lg:mb-0 lg:mr-5 bg-main-bg p-2 lg:p-4 rounded-md'>
                    <AiOutlineWifi className='text-darkGreen text-2xl lg:text-4xl' />
                </div>
                <div>
                    <span className='uppercase text-darkGreen font-extralight tracking-widest text-xs md:text-md'>SECURE VPN</span>
                    <p className='p text-white mb-0 font-light'>Ac condimentum at accumsan ante sed morbi</p>
                </div>
            </div>
            {/* grid item */}
            <div className='p-5 text-center flex flex-col lg:flex-row lg:text-left items-center border-r border-borderLight'>
                {/* icon-wrapper */}
                <div className='mb-5 lg:mb-0 lg:mr-5 bg-main-bg  p-2 lg:p-4 rounded-md'>
                    <BsSpeedometer2 className='text-darkGreen text-2xl lg:text-4xl' />
                </div>
                <div>
                    <span className='uppercase text-darkGreen font-extralight tracking-widest text-xs md:text-md'>TUNEUP</span>
                    <p className='p text-white mb-0 font-light'>Ac condimentum at accumsan ante sed morbi</p>
                </div>
            </div>
            {/* grid item */}
            <div className='p-5 text-center flex flex-col lg:flex-row lg:text-left items-center'>
                {/* icon-wrapper */}
                <div className='mb-5 lg:mb-0 lg:mr-5 bg-main-bg p-2 lg:p-4 rounded-md'>
                    <BsFingerprint className='text-darkGreen text-2xl lg:text-4xl' />
                </div>
                <div>
                    <span className='uppercase text-darkGreen font-extralight tracking-widest text-xs md:text-md'>PRIVACY PROTECTIONS</span>
                    <p className='p text-white mb-0 font-light'>Ac condimentum at accumsan ante sed morbi</p>
                </div>
            </div>
        </div>
      </article>
    </section>
  )
}

export default Security
