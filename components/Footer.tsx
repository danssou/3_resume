import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className=' w-full pt-20 pb-10 ' id='contact'>
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div> */}
        <div className='flex flex-col items-center' >
            <h1 className='heading lg:max-w-[45vw]' >
                Ready to take <span className='text-purple' >your</span> digital presence to the next level?
            </h1>
            <p className=' text-white-200 md:mt-10 my-5 text-center' >
                Reach out to me today and let's discuss how i can help you transform your idea into reality 
            </p>
            <a href="mailto:danssoukokouvi@gmail.com">
                <MagicButton 
                title=" Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>

        <div className=' mt-16 md:flex-row flex-col border-t-2 border-t-gray-400 '>
            <p className='md:text-base text-xs md:font-normal font-light flex md:justify-start md:mt-3 justify-center'>
             Copyright © 2024 All rights reserved. Danssou Kokouvi
            </p>
            <div className='flex items-center md:gap-3 lg:gap-6 gap-2 md:justify-end justify-center mt-1 md:-mt-8' >
                {socialMedia.map(({id, img}) => (
                    <div key={id} className='w-10 h-10 cursor-pointer flex justify-center
                     items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75
                     bg-black-200 rounded-lg border-black-300
                     '>
                        <img src={img} alt={img}  width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer