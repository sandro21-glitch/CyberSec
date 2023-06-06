import React from 'react'

const DataPrivacy = () => {
  return (
    <section className='py-10 w-full bg-bgWoman bg-centerPos bg-no-repeat bg-cover relative'>
         {/* overlay */}
         <div className='overlay-second absolute left-0 top-0 h-full w-full'></div>
        <article data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true" data-aos="fade-up" className='relative z-[99] max-w-maxWidth mx-auto px-5 lg:py-28 text-center md:text-left'>
            <h3 className='h3 font-semibold text-white lg:leading-normal mb-5 md:max-w-[50%]'>Data privacy is a human right and it belongs to you.</h3>
            <p className='p text-white mb-5 md:max-w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm hover:bg-darkPurple transition-colors ease-in duration-200'>Discover More</button>
        </article>
    </section>
  )
}

export default DataPrivacy
