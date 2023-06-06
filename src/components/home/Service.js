import React from 'react'
import secImg from '../../images/sec-img.png'
import {BsShieldCheck} from 'react-icons/bs'
import {AiOutlineGlobal,AiOutlineBug} from 'react-icons/ai'
const Services = () => {
  return (
    <section className='py-36 w-full bg-bgLines bg-centerPos bg-no-repeat bg-cover relative'>
    {/* overlay */}
    <div className='overlay absolute left-0 top-0 h-full w-full'></div>
   <article className='relative z-[99] max-w-maxWidth mx-auto px-5 text-center md:text-left
   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      <header className='text-left md:pr-10' 
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-once="true"
            data-aos-easing="ease-in-out">
            <h6 className='h6 text-darkGreen uppercase mb-2'>Our services</h6>
            <h2 className='h2 font-semibold text-white mb-2'>No matter where you go. Be security smart.</h2>
            <p className="p text-white mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </header>
      {/* img wrapper */}
      <div className='p-0'
        data-aos="zoom-in" 
        data-aos-duration="1000" 
        data-aos-once="true"
        data-aos-easing="ease-in-out"
      >
        <img src={secImg} alt="security img"  className='w-full max-w-[1093px] h-auto'/>
      </div>
      {/* protections list */}
        <ul className="flex flex-col space-y-7 md:pl-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-once="true"
            data-aos-easing="ease-in-out"
        >
            <li className='flex items-center  text-left gap-4'>
                <div className='bg-darkGreen p-2 rounded-lg'>
                    <BsShieldCheck className='text-4xl lg:text-5xl text-white' />
                </div>
                <div>
                    <span className='text-white'>Privacy Protection</span>
                    <p className='p mb-0 text-white'>Mollis sed elit mattis lorem malesuada class laoreet accumsan et</p>
                </div>
            </li>
            <li className='flex items-center  text-left gap-4'>
                <div className='bg-darkGreen p-2 rounded-lg'>
                    <AiOutlineGlobal className='text-4xl lg:text-5xl text-white' />
                </div>
                <div>
                    <span className='text-white'>Secure Network</span>
                    <p className='p mb-0 text-white'>Mollis sed elit mattis lorem malesuada class laoreet accumsan et</p>
                </div>
            </li>
            <li className='flex items-center  text-left gap-4'>
                <div className='bg-darkGreen p-2 rounded-lg'>
                    <AiOutlineBug className='text-4xl lg:text-5xl text-white' />
                </div>
                <div>
                    <span className='text-white'>Malware & Virus Protection</span>
                    <p className='p mb-0 text-white'>Mollis sed elit mattis lorem malesuada class laoreet accumsan et</p>
                </div>
            </li>
        </ul>
   </article>
</section>
  )
}

export default Services
