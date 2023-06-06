import React, {useState,useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { companiesList } from '../../constants/CompaniesList';
const Companies = () => {


  return (
    <section className='py-10 mt-10 mx-auto border-t border-borderLight'>
        <article className='max-w-maxWidth mx-auto px-5'>
            <Splide options={ {
                type:'loop',
                autoplay:true,
                rewind: true,
                width :'auto',
                gap   : '2rem',
                perPage: 6,
                updateOnMove : true,
                breakpoints: {
                    1200: {
                        perPage: 6,
                    },
                    992: {
                        perPage: 3,
                    },
                    768: {
                          perPage: 2,
                      },
                },
                arrows:false,
                pagination:false,
            } }>
                {companiesList.map((list) => {
                    return <SplideSlide key={list.id} className='flex items-center'>
                        <img src={list.img} alt="company logo" className='h-auto max-w-full' />
                    </SplideSlide>
                })}
            </Splide>
        </article>
    </section>
  )
}

export default Companies
