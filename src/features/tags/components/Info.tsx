import React from 'react'
import Related from './Related'

const Info = () => {

    const names = [
        'system design', 'cloud native', 'edge computing', 'scalability'

    ]
    return (
        <div className='px-6 py-20 sm:px-12 lg:px-24 xl:px-40 '>
            <div>
                <div className='px-6 py-20'>
                    <div className='flex flex-col md:flex-row md:items-baseline gap-4 mb-4'>
                        <h1 className=' text-white font-headline leading-none italic text-7xl sm:text-8xl'>Architecture</h1>
                        <span className='uppercase font-mono text-sm text-foreground/50'>
                            42 posts found
                        </span>
                    </div>

                    <p className='text-lg max-w-2xl leading-relaxed font-light text-foreground/80'>
                        Exploring the structural integrity of digital systems. From monolithic patterns to distributed microservices, we dissect the bones of the modern web.
                    </p>
                    <div className='flex items-center mt-10  flex-wrap gap-3'>

                        {names.map((name, index) => (
                            <Related key={index} name={name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
