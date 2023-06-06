import React from 'react'

const Featured = () => {
  return (
    <section className='py-20'>
        <header className='px-5 max-w-maxWidth mx-auto flex flex-col md:flex-row items-end'
                    data-aos="slide-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                    data-aos-once="true"
                >
                    <div className='flex-1'>
                        <h6 className="h6 text-darkGreen mb-3">WHO WE ARE</h6>
                        <h2 className="h2 text-white mb-3">
                        Protecting you from the dangers of cyberspace.
                        </h2>
                    </div>
                    <div className='flex-1'>
                        <p className='p text-white'>Quam elementum vehicula cubilia fringilla dictum donec nisi tellus integer ac scelerisque. Convallis est ornare erat rutrum laoreet cubilia vulputate blandit semper scelerisque. Aliquet diam urna rutrum praesent ad habitasse ultricies.</p>
                        <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm
                        hover:bg-darkPurple transition-colors ease-in duration-150'>Discover More</button>
                    </div>
        </header>
    </section>
  )
}

export default Featured
