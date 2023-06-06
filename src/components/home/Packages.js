import React from 'react'
import { packages } from '../../constants/packages'
const Packages = () => {
  return (
    <section className='py-10'>
        <article className='max-w-maxWidth mx-auto px-5'>
            <div className='z-[99] text-white text-center mb-20 lg:max-w-[50%] mx-auto'>
                <h2 className=" h2 text-white" data-aos={'fade-up'} data-aos-duration="1000" data-aos-once="true">Start Your Free Trial Today</h2>
                <h4 className='h4 text-white font-light' data-aos={'fade-up'} data-aos-duration="1000" data-aos-delay="50" data-aos-once="true">Pay with a credit card, PayPal, Sofort, Google Pay, Amazon Pay & crypto.</h4>
            </div>
            {/* packages */}
            <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0">
                {packages.map((pack) => {
                    const {id,name,para,popular,price,features,center,right,left} = pack
                    return <div key={id} data-aos={`${center ? 'slide-up' : left ? 'slide-left' : right ? 'slide-right' : ''}`} data-aos-once="true" data-aos-duration="1000" className={`bg-lightBlue border border-[#FFFFFF2B] hover:border-darkPurple transition-all ease-linear duration-200 rounded-lg w-full px-5 hover:boxShadow 
                    py-10 ${popular ? 'py-16 relative' : left ? 'md:border-r-0 md:rounded-r-none' : right ? 'md:border-l-0 md:rounded-l-none' : ''}`}>
                        {popular && <span className='text-center absolute top-0 left-0 right-0 text-white rounded-b-md text-sm p-1 w-1/2 mx-auto overlayBg'>MOST POPULAR</span>}
                        <div className='text-center space-y-3 mb-5'>
                            <span className="text-darkGreen text-lg md:text-xl lg:text-2xl font-thin">{name}</span>
                            <p className='text-white text-[.9rem] mb-0'>{para}</p>
                            <div className='flex items-center justify-center gap-2'>
                                <span  className='text-white text-2xl lg:text-4xl font-semibold italic'>
                                    ${price} 
                                </span>
                                <span className='uppercase text-darkGreen text-xs'>/monthly</span>
                            </div>
                        </div>
                        {/* features */}
                        <ul className='text-center mb-10'>
                            {features.map((list,index) => {
                                return <li key={index} className='border-b last:border-none border-[#FFFFFF2B] text-white font-thin text-[.9rem] py-4'>
                                        {list}
                                </li>
                            })}
                            </ul>
                        <div>
                            <button className='cursor-pointer uppercase text-white bg-darkGreen w-full py-3 rounded-md text-sm
                            hover:bg-darkPurple transition-colors ease-in duration-150 mb-5'>
                                get started
                            </button>
                            <p className='text-center p mb-0 text-white'>*Primis accumsan suscipit curabitur enim lacinia ridiculus morbi natoque consequat</p>
                        </div>
                    </div>
                })}
            </div>
        </article>
    </section>
  )
}

export default Packages
