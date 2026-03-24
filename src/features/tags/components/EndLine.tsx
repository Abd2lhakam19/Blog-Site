import React from 'react'

const EndLine = () => {
    return (
        <div className='px-4 py-10 sm:px-12 lg:px-24 xl:px-40 w-full'>
            <div className='px-6'>
                <div className='flex flex-col md:flex-row justify-between items-end gap-12 '>

                    <div className='max-w-md'>
                        <h3 className='font-headline text-3xl sm:text-4xl text-white italic mb-4'>
                            End of the Line
                        </h3>
                        <p className=' text-white/80 font-sans text-sm'>
                            You've reached the bottom of our architecture archives. Subscribe to get the next dispatch directly in your terminal.
                        </p>
                    </div>
                    <div className='flex items-center gap-8'>
                        <button className='uppercase text-outline-variant font-mono text-[10px] tracking-widest hover:text-white transition-colors cursor-not-allowed'>
                            previous page
                        </button>
                        <span className='font-mono text-primary text-[10px]'>
                            01/05
                        </span>
                        <button className='uppercase text-white font-mono text-[10px] tracking-widest hover:text-primary transition-colors '>
                            next page
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EndLine
