import React from 'react'
import {team} from '../../constants/team'
import {AiFillLinkedin,AiFillTwitterSquare,AiTwotoneMail} from 'react-icons/ai'
const Team = () => {
  return (
    <section className='py-20 bg-bgTeam bg-centerPos relative'>
      {/* overlay */}
      <div className='absolute top-0 left-0 h-full w-full team-overlay '></div>
        <article className="max-w-maxWidth mx-auto px-5 flex flex-col relative z-[99]">
            <header className='text-center'
               data-aos="slide-up"
               data-aos-duration="800"
               data-aos-easing="ease-in"
               data-aos-once="true"
            >
              <h6 className="h6 text-darkGreen">MEET OUR TEAM</h6>
              <h2 className="h2 text-white lg:max-w-[50%] mx-auto">
                If you can laugh together, you can work together.
              </h2>
            </header>\
            {/* team */}
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'
               data-aos="fade"
               data-aos-duration="1000"
               data-aos-easing="ease-in"
               data-aos-once="true"
            >
              {team.map((person) => {
                const {id,img,name,position} = person
                return <li key={id} className='rounded-xl overflow-hidden relative'>
                    {/* img wrapper */}
                    <div>
                      <img src={img} alt={name} />
                    </div>
                    <div className='bg-lightBlue p-5 text-center'>
                      <p className='text-white text-[1rem] md:text-xl'>{name}</p>
                      <span className='text-darkGreen text-xs lg:text-sm'>{position}</span>
                    </div>
                    {/* social */}
                    <div className="absolute top-5 right-5 flex flex-col">
                        <a href='#' className='hover:scale-110 transition-all ease-in duration-150'>
                          <AiFillLinkedin className='text-inLink text-3xl ' />
                        </a>
                        <a href='#' className='hover:scale-110 transition-all ease-in duration-150'>
                          <AiFillTwitterSquare className='text-twLink text-3xl' />
                        </a>
                        <a href='#' className='hover:scale-110 transition-all ease-in duration-150'>
                          <AiTwotoneMail className='text-gray-200 text-3xl' />
                        </a>
                    </div>
                </li>
              })}
            </ul>
        </article>
    </section>
  )
}

export default Team
