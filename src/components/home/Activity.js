import React from 'react'

const Activity = () => {
  return (
    <section className='py-32 bg-bgMan bg-centerBot bg-no-repeat bg-cover relative'>
        {/* overlay */}
        <div className="overlay-second absolute left-0 top-0 w-full h-full"></div>
        <article className='max-w-maxWidth mx-auto px-5 relative z-50'>
            <div className='z-[99] text-white text-center mb-20 lg:max-w-[50%] mx-auto'>
                <h2 className=" h2 text-white mb-2" >Your online activity & privacy covered</h2>
                <p className='p md:text-lg text-white font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm
                    hover:bg-darkPurple transition-colors ease-in duration-150'>Discover More</button>
            </div>
        </article>
    </section>
  )
}

export default Activity
