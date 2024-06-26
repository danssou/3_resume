import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='gap-5 py-20' id='experience'>
      <h1 className=' font-bold text-4xl md:text-5xl text-center lg:text-6xl lg:tracking-wide'>
        My <span className=' text-purple'> work eperience </span>
      </h1>
      <div className='mt-10 w-full grid lg:grid-cols-4 grid-cols-1 gap-10 ' >
        {workExperience.map(({ id, title, desc, className, thumbnail}, index) => (
            <Button
            key={id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius="1.75rem"
            className="flex-1 dark:border-slate-800 text-white border-neutral-200"
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={thumbnail} alt={title} className=' lg:w-30 md:w-18 w-16' />
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold' >{title}</h1>
                        <p className='text-start text-white-100 mt-3 font-semibold' > {desc} </p>
                    </div>
                </div>

            </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience