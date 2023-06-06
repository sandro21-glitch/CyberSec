import React from 'react'
import logo from '../images/Siber-logo.png'
import {
        AiFillFacebook,
        AiFillTwitterSquare,
        AiFillLinkedin,
        AiFillYoutube,
        } from 'react-icons/ai'
import {FaRssSquare} from 'react-icons/fa'        
const Footer = () => {
  return (
    <footer className='py-10'>
        <article className='py-10 w-[90vw] md:w-[95vw] mx-auto bg-lightBlue rounded-2xl'>
            {/* content */}
            <div className='max-w-maxWidth mx-auto px-5 '>
                <header className=' flex flex-col md:flex-row justify-between'>
                    <h4 className='h4 text-white mb-5 w-full'>Signup our newsletter to get update information, news, insight or promotions.</h4>
                    <form className='w-full flex justify-end'>
                        <div className="flex flex-col gap-5 w-full md:w-1/2">
                            <input type="email" placeholder='Email' className='bg-borderLight  px-4 py-3 rounded-md outline-transparent focus:outline-darkPurple border-none transition-[outline] ease-in duration-100' />
                            <button type='submit' className='text-sm text-white py-3 rounded-md cursor-pointer uppercase bg-darkGreen hover:bg-darkPurple transition-colors ease-in duration-150'>Sign Up</button>
                        </div>
                    </form>
                </header>
                <div className="bg-borderLight w-full h-[.1px] my-5"></div>
                {/* footer links */}
                <div className='lg:flex items-start'>
                    {/* logo wrapper */}
                    <div className='mb-3 md:flex md:items-center md:flex-col lg:items-start'>
                        <img src={logo} alt="logo" className='mb-3' />
                        <h4 className='h4 mb-3 text-white max-w-[70%]'>Empowering Your Security, Safeguarding Your Trust</h4>
                        {/* social links */}
                        <ul className="flex items-center gap-2">
                            {/* link */}
                            <li className='text-fbLink text-3xl cursor-pointer  hover:scale-110 transition-all ease-in duration-150'>
                                <AiFillFacebook />
                            </li>
                            {/* link */}
                            <li className='text-twLink text-3xl cursor-pointer hover:scale-110 transition-all ease-in duration-150'>
                                <AiFillTwitterSquare />
                            </li>
                            {/* link */}
                            <li className='text-inLink text-3xl cursor-pointer hover:scale-110 transition-all ease-in duration-150'>
                                <AiFillLinkedin />
                            </li>
                            {/* link */}
                            <li className='text-ytLink text-3xl cursor-pointer hover:scale-110 transition-all ease-in duration-150'>
                                <AiFillYoutube />
                            </li>
                            {/* link */}
                            <li className='text-rssLink text-3xl cursor-pointer hover:scale-110 transition-all ease-in duration-150'>
                                <FaRssSquare />
                            </li>
                        </ul>
                    </div>
                    {/* info */}
                    <div className="flex flex-wrap md:flex-nowrap items-start justify-between md:justify-start lg:justify-between gap-5 lg:gap-20">
                        {/* services */}
                        <div>
                            <h5 className='text-lg md:text-xl text-darkGreen mb-2'>Services</h5>
                            <ul className='text-lightGray text-xs md:text-sm space-y-1'>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Network Protections</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Server Protections</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Vulnerability Assessment</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>SPAM Protections</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Secure Transactions</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Antivirus</li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h5 className='text-lg md:text-xl text-darkGreen mb-2'>Support</h5>
                            <ul className='text-lightGray text-xs md:text-sm space-y-1'>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Help Center</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>My Account</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Ticket Support</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>FAQ</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Community</li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div>
                            <h5 className='text-lg md:text-xl text-darkGreen mb-2'>Company</h5>
                            <ul className='text-lightGray text-xs md:text-sm space-y-1'>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>About us</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Leadership</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Investors</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Careers</li>
                                <li className='hover:text-darkPurple transition-colors ease-in duration-150 cursor-pointer'>Article & News</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </footer>
  )
}

export default Footer
