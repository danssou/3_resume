import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className=' flex flex-col gap-5 py-20' id='testimonials'>
      <h1 className=' font-bold text-4xl md:text-5xl text-center lg:text-6xl lg:tracking-wide'>
        Kind words from <span className=' text-purple'> satisfied clients </span>
      </h1>

      <div className=' flex flex-col items-center max-lg:mt-10'>
      {/* <div className=' h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'> */}
        <InfiniteMovingCards 
        items={testimonials}
        direction='right'
        speed='slow'
      />
      <div className='flex flew-wrap gap-10 md:gap-16 max-lg:mt-20 items-center justify-center md:mt-20 '>
        {companies.map(({id, name, img, nameImg}) => (
          <div className='flex md:max-w-60 max-w-32 gap-2' key={id}>
              <img src={img} alt={name} className=' object-contain md:w-10 w-5' />
              <img src={nameImg} alt={name} className=' object-contain md:w-24 w-20' />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Clients