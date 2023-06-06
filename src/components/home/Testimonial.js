import React, {useState, useEffect} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {IoIosStarHalf} from 'react-icons/io'
import {testimonial} from '../../constants/testimonial'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import personImg from '../../images/person.jpg'
const Testimonial = () => {

  return (
    <section className='bg-bgLines bg-cover bg-centerPos bg-no-repeat w-full py-20 relative'>
        {/* overlay */}
        <div className='overlay absolute left-0 top-0 h-full w-full'></div>
        <article className='relative z-[99] max-w-maxWidth mx-auto px-5'>
                <header className='text-center mb-10'>
                    <h6 className='h6 text-darkGreen font-thin mb-3 tracking-wider' 
                        data-aos="fade-top" 
                        data-aos-duration="1000" 
                        data-aos-once="true"
                        data-aos-easing="ease-in"
                        >
                        TESTIMONIAL
                    </h6>
                    <h2 className="h2 text-white mb-3"
                        data-aos="fade-top" 
                        data-aos-duration="1000" 
                        data-aos-once="true"
                        data-aos-easing="ease-in"
                        >
                            Our Client Feedback
                        </h2>
                    {/* stars */}
                    <ul className="flex items-center justify-center"
                        data-aos="fade-top" 
                        data-aos-duration="1000" 
                        data-aos-once="true"
                        data-aos-easing="ease-in"
                        >
                        <li><AiFillStar className='text-orange text-2xl' /></li>
                        <li><AiFillStar className='text-orange text-2xl' /></li>
                        <li><AiFillStar className='text-orange text-2xl' /></li>
                        <li><AiFillStar className='text-orange text-2xl' /></li>
                        <li><IoIosStarHalf className='text-orange text-2xl' /></li>
                    </ul>
                </header>
                {/* slider */}
                <Splide options={ {
                type:'loop',
                autoplay:true,
                rewind: true,
                width :'auto',
                gap   : '2rem',
                arrows:true,
                pagination:false,
                arrows: true,
                //perPage: 5,
                updateOnMove : true,
                perPage: 3,
                breakpoints: {
                    1200: {
                        perPage: 3,
                    },
                    992: {
                        perPage: 2,
                    },
                    768: {
                          perPage: 1,
                      },
                }
                } }>
                    {testimonial.map((list) => {
                        return <SplideSlide key={list.id} className='border bg-[#04182F80] border-borderLight rounded-lg p-7 h-fit cursor-grab'>
                            <div className="flex items-center flex-col ">
                               <div className='mb-5'>
                                <img src={personImg} alt={list.name} className='w-14 rounded-full' />
                               </div>
                                <p className='p text-white mb-5 text-center'>
                                    {list.text}
                                </p>
                                <div className='text-center'>
                                    <span className='block text-darkGreen italic'>{list.name}</span>
                                    <span className='block text-white text-xs italic'>{list.title}</span>
                                </div>
                            </div>
                        </SplideSlide>
                    })}
                </Splide>
        </article>
    </section>
  )
}

export default Testimonial
