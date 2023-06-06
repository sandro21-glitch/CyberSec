import React, { useEffect } from 'react'
import heroLogo from '../../images/img_3.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Hero = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <section className='bg-bgLines bg-cover bg-centerPos bg-no-repeat w-full py-10 relative'>
        {/* overlay */}
        <div className='overlay bg-transparent absolute left-0 top-0 h-full w-full'></div>
        <article className='relative z-[99] flex items-center justify-center md:justify-between flex-col md:flex-row-reverse max-w-maxWidth mx-auto px-5'>
            {/* image wrapper */}
            <div className="flex-1 mb-5"> 
                <img src={heroLogo} alt="hero logo" className='max-w-full lg:w-[650px] md:w-full h-auto' />
            </div>
            {/* hero title */}
            <div className="text-center md:text-left flex-1">
                <h6 className='h6 text-limeGreen font-light lg:mb-2' data-aos-once="true" data-aos-delay="0" data-aos="fade-up" data-aos-duration="1000">TRUSTED CYBER SECURITY COMPANY</h6>
                <h2 className='h2 text-white lg:leading-normal lg:mb-2' data-aos-once="true"  data-aos-delay="250" data-aos="fade-up" data-aos-duration="1000">Secure your cyberspace, secure your digital life.</h2>
                <p className='p text-white font-light lg:text-lg' data-aos-once="true" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">Massa nam vitae inceptos elit volutpat. Aliquet letius lorem dignissim molestie feugiat accumsan et. Augue si sapien mollis aenean suscipit at.</p>
                <button data-aos-once="true" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1000" className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm
                    hover:bg-darkPurple transition-colors ease-in duration-150'>Discover More</button>
            </div>
      </article>
    </section>
  )
}

export default Hero
