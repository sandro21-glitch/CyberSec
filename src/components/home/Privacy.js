import React from 'react'
import {BsShieldCheck} from 'react-icons/bs'
import {AiOutlineGlobal,AiOutlineBug} from 'react-icons/ai'
const Privacy = () => {
  return (
    <section className='py-10'>
      <article className='max-w-maxWidth mx-auto px-5 text-center'>
            <header className='lg:max-w-[50%] max-w-[90%] mx-auto mb-10' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                <h3 className='h3 text-white mb-2'>Keeping you safe, keeping you secure.</h3>
                <p className="p text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </header>
            {/* grid items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000" className='bg-lightBlue rounded-xl px-7 py-14 flex flex-col items-center border border-transparent hover:border-darkPurple transition-all ease-in duration-200'>
                    <div className='mb-5 p-3 bg-darkGreen rounded-md'>
                        <BsShieldCheck className='text-3xl lg:text-4xl text-white' />
                    </div>
                     <span className='uppercase text-md lg:text-xl lg:mb-2 text-white font-extralight tracking-wide md:text-md'>Privacy Protection</span>
                    <p className='p text-white mb-0 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div data-aos="fade-up" data-aos-once="true" data-aos-delay="150" data-aos-duration="1000" className='overlayBg rounded-xl px-7 py-14 flex flex-col items-center border border-transparent hover:border-darkPurple transition-all ease-in duration-200'>
                     <div className='mb-5 p-3 bg-white rounded-md'>
                        <AiOutlineGlobal className='text-3xl lg:text-4xl text-darkGreen' />
                    </div>
                     <span className='uppercase text-md lg:text-xl lg:mb-2 text-white font-extralight tracking-wide md:text-md'>Secure Network</span>
                    <p className='p text-white mb-0 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" className='bg-lightBlue rounded-xl px-7 py-14 flex flex-col items-center border border-transparent hover:border-darkPurple transition-all ease-in duration-200'>
                     <div className='mb-5 p-3 bg-darkGreen rounded-md'>
                        <AiOutlineBug className='text-3xl lg:text-4xl text-white' />
                    </div>
                     <span className='uppercase text-md lg:text-xl lg:mb-2 text-white font-extralight tracking-wide md:text-md'>Malware & Virus Protection</span>
                    <p className='p text-white mb-0 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
      </article>
    </section>
  )
}

export default Privacy
