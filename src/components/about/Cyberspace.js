import React from 'react'
import cyberImg from '../../images/cyber-security-threat-young-woman-using-computer-and-coding-internet-and-network-security-hacker.jpg'
const Cyberspace = () => {
  return (
    <section className='py-20 bg-bgLines2 bg-centerPos relative'>
        {/* overlay */}
        <div className="overlayAbout absolute left-0 top-0 w-full h-full"></div>
        <article className='max-w-maxWidth mx-auto px-5'>
            {/* flex items */}
            <div className="flex flex-col md:flex-row justify-between w-full relative z-[99]">
                <header className='md:w-1/2 mb-10 md:mb-0'
                    data-aos="slide-right"
                    data-aos-duration="800"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                >
                    <h6 className="h6 text-darkGreen mb-3">WHO WE ARE</h6>
                    <h2 className="h2 text-white mb-3">
                    Protecting you from the dangers of cyberspace.
                    </h2>
                    <p className='p text-white'>Quam elementum vehicula cubilia fringilla dictum donec nisi tellus integer ac scelerisque. Convallis est ornare erat rutrum laoreet cubilia vulputate blandit semper scelerisque. Aliquet diam urna rutrum praesent ad habitasse ultricies.</p>
                    <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm
                    hover:bg-darkPurple transition-colors ease-in duration-150'>Discover More</button>
                </header>
            {/* img wrapper */}
            <div className='md:pl-10 relative'
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                data-aos-once="true"
            >
                <img src={cyberImg} alt="cyber img" className='w-full max-w-1/2 h-auto md:h-[500px] rounded-md ' />
                {/* absolute content */}
                <div className="absolute -right-5 bottom-0 translate-y-1/2 w-[8rem] lg:w-[10rem] h-[8rem] lg:h-[10rem] rounded-xl overlayBg flex items-center justify-center flex-col text-center">
                    <div className="text-white text-4xl lg:text-[3rem] mb-1 font-bold">
                        15+
                    </div>
                    <div className='text-xs lg:text-sm text-white px-5'>YEARS OF EXPERIENCE</div>
                </div>
            </div>
            </div>
        </article>
    </section>
  )
}

export default Cyberspace
