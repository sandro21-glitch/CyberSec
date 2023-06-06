import React from 'react'
import {protect} from '../../constants/ProtectionsList'
const Protections = () => {
  return (
    <section className='py-10'>
        <article className='max-w-maxWidth mx-auto px-5'>
            <header className='text-center max-w-[720px] mx-auto mb-5'
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-once="true"
                data-aos-easing="ease-in-out">
                <h6  className='h6 text-darkGreen font-light tracking-wider'>WHAT WE OFFER</h6>
                <h2  className='h2 text-white'>Secure your data, secure your future.</h2>
            </header>
            {/* protections grid */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                {protect.map((list) => {
                    return (
                        <li key={list.id} className='bg-lightBlue space-y-5 hover:overlayBg transition-all ease-in duration-300 flex items-center text-center flex-col border border-borderLight rounded-xl p-10'>
                            <div className='text-4xl text-darkGreen bg-main-bg hover:bg-white transition-all ease-in duration-150 rounded-md p-3'>{list.icon}</div>
                            <span className='text-lightGray text-xl lg:text-2xl'>
                                {list.name}
                            </span>
                            <p className='p text-lightGray'>{list.para}</p>
                            <button className='cursor-pointer uppercase text-white bg-darkGreen px-8 py-3 rounded-md text-xs
                    hover:bg-darkPurple transition-colors ease-in duration-150'>
                                LEARN MORE
                            </button>
                        </li>
                    )
                })}
            </ul>
        </article>
    </section>
  )
}

export default Protections
