import React from 'react'
import { faqList } from '../../constants/FaqList'
import { useState } from 'react'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const Faq = () => {

    const [open, setOpen] = useState(0);
 
    const handleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className='py-10'>
            <article className='flex flex-col justify-between md:flex-row max-w-maxWidth mx-auto px-5'>
                <header data-aos-once="true" data-aos="slide-right" data-aos-duration="1000">
                    <h6 className='h6 text-darkGreen mb-3'>FAQ</h6>
                    <h2 className='h2 text-white mb-3'>Frequently Ask Questions.</h2>
                    <p className='p w-1/2 text-white mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </header>
                <ul className='space-y-5' data-aos-once="true" data-aos="slide-left" data-aos-duration="1000">
                {faqList.map((faq,index) => {
                    return (
                        <Accordion open={open === index} key={index} className='border-none w-fit'>
                            <AccordionHeader onClick={() => handleOpen(index)} className={`bg-lightBlue text-white p-5 ${open === index ? 'rounded-b-none overlayBg' : 'rounded-lg'} border-none rounded-t-lg`}>
                                {faq.question}
                            </AccordionHeader>
                            <AccordionBody className='text-white bg-lightBlue p-5'>
                                {faq.answer}
                            </AccordionBody>
                        </Accordion>
                    )
                })}
            </ul>
        </article>
        </section>
      );
}

export default Faq
