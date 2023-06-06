import React from 'react'

const AboutHero = () => {
  return (
    <section className='py-10'>
        <header className='text-center max-w-maxWidth mx-auto px-5'>
            <h1 className='h1 text-white' 
             data-aos="fade"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              About us</h1>
            <p className='lg:text-2xl font-thin px-5 text-white' 
             data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-once="true"
            >
              We provide innovative solutions for your security needs.</p>
        </header>
    </section>
  )
}

export default AboutHero
