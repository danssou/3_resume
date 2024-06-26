import React from 'react'

const TechStack = () => {
  return (
    <div className=' flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 top-px'>
        <div  className='flex flex-col gap-3 md:gap-3 lg:gap-8' >
            {["React.js", "Next.js", "Python"].map((tech, index) => (
                <span key={index} className=' className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] '>{tech}</span>
            ))}
            <span className=' lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E] ' />
        </div>
        <div  className='flex flex-col gap-3 md:gap-3 lg:gap-8' >
        <span className=' lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E] ' />
            {["Docker", "SQL", "Pandas"].map((tech, index) => (
                <span key={index} className=' className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] '>{tech}</span>
            ))}
           
        </div>

        
    </div>
  )
}

export default TechStack