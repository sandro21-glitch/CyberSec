import React, { useEffect } from 'react'
import CountUp from 'react-countup';
const Monitoring = () => {
  
  return (
    <section className='py-20 lg:py-32 lg:my-10 w-full bg-bgMap bg-centerPos bg-contain bg-no-repeat relative'>
        {/* overlay */}
        <div className='overlay bg-transparent absolute left-0 top-0 h-full w-full'></div>
      <article className='max-w-maxWidth px-5 mx-auto'>
          <h2 className="z-[99] relative h2 text-white text-center mb-5 lg:max-w-[70%] mx-auto">Security monitoring and malware protection for <span className='text-darkPurple'>businesses.</span></h2>
          <p className="z-[99] lg:text-[1rem] relative p mb-10 text-center text-white lg:max-w-[70%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          {/* flex items */}
          <div className="z-[99] relative flex mx-auto items-center justify-center flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
            {/* box */}
              <div className="text-center lg:w-[23%] bg-lightBlue border border-borderLight rounded-lg py-5 w-full">
                  <span className='text-darkGreen text-2xl lg:text-4xl font-semibold'><CountUp enableScrollSpy scrollSpyOnce end={24} suffix="M+" duration={5}  /></span>
                  <p className='p mb-0 uppercase text-lightGray'>Happy Customer</p>
              </div>
            {/* box */}
              <div className="text-center lg:w-[23%] bg-lightBlue border border-borderLight rounded-lg py-5 w-full">
                  <span className='text-darkGreen text-2xl lg:text-4xl font-semibold'><CountUp enableScrollSpy scrollSpyOnce start={30} end={99} suffix="%" duration={5}  /></span>
                  <p className='p mb-0 uppercase text-lightGray'>UPTIME SERVER</p>
              </div>
            {/* box */}
              <div className="text-center lg:w-[23%] bg-lightBlue border border-borderLight rounded-lg py-5 w-full">
                  <span className='text-darkGreen text-2xl lg:text-4xl font-semibold'><CountUp enableScrollSpy scrollSpyOnce end={3} suffix="M+" duration={10}  /></span>
                  <p className='p mb-0 uppercase text-lightGray'>PROJECT DONE</p>
              </div>
          </div>
      </article>
    </section>
  )
}

export default Monitoring