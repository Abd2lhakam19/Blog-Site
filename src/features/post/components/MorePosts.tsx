import React from 'react'

const MorePosts = () => {
    return (
        <div className='flex flex-col gap-4 group cursor-pointer'>
            <div className='rounded-lg overflow-hidden grayscale group-hover:grayscale-0'>

                <img src="/micro.png " className='object-cover w-full h-full  group-hover:scale-103 transition-all duration-500 aspect-video' alt="" />
            </div>
            <h2 className='uppercase text-white/50 leading-relaxed tracking-widest text-sm'> Engineering</h2>
            <h1 className='font-headline text-2xl group-hover:text-primary-container/50 transition-colors duration-300 '>The Cost of Observability in High-Throughput Pipes</h1>
            <p className='text-sm leading-relaxed text-white/50'>Measuring the unmeasurable without destroying the very performance we seek to optimize.</p>
        </div>
    )
}

export default MorePosts
