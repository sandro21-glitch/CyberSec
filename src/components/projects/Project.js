import React from 'react'
import { projects } from '../../constants/projects'
const Project = () => {
  return (
    <section className='py-20'>
        <article className='max-w-maxWidth mx-auto px-5'>
            <ul className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects.map((item) => {
                    const {id,name,title,icon,img,desc} = item
                    return <li key={id} className='rounded-xl overflow-hidden'>
                            <div>
                                <img src={img} alt={name} className='h-[200px] lg:h-[275px] w-full object-cover saturate-0 hover:filter-none transition-all ease-in duration-150' />
                            </div>
                            <div className='bg-lightBlue p-5'>
                                <div className='w-fit p-3 rounded-lg bg-main-bg -translate-y-[80%]'>
                                    <span className='text-3xl text-darkGreen'>{icon}</span>
                                </div>
                                <h6 className='text-darkGreen h6 mb-2'>{name}</h6>
                                <p className=' text-white mb-2 text-xl'>{title}</p>
                                <p className='p text-white'>{desc}</p>
                                <div>
                                    <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm
                                    hover:bg-darkPurple transition-colors ease-in duration-150'>
                                        Discover More
                                    </button>
                                </div>
                            </div>
                    </li>
                })}
            </ul>
        </article>
    </section>
  )
}

export default Project
