import React from 'react'

const Footer = () => {
    return (
        <div className='border-t border-surface-bright w-full'>
            <div className='px-4 py-10 sm:px-12 lg:px-24 xl:px-40'>
                <div className=' px-6 flex flex-col gap-12 md:flex-row items-center justify-between'>
                    <h3 className='font-headline text-lg italic text-white '> Neon Monolith</h3>
                    <div className='flex gap-8'>
                        <a className='uppercase tracking-widest font-sans text-foreground/50 text-[10px] hover:text-primary transition-colors' href=""> github</a>
                        <a className='uppercase tracking-widest font-sans text-foreground/50 text-[10px] hover:text-primary transition-colors' href=""> Discord</a>
                        <a className='uppercase tracking-widest font-sans text-foreground/50 text-[10px] hover:text-primary transition-colors' href=""> rss</a>
                        <a className='uppercase tracking-widest font-sans text-foreground/50 text-[10px] hover:text-primary transition-colors' href=""> privacy</a>

                    </div>
                    <p className='font-sans text-[10px] tracking-widest text-foreground/40'>
                        © 2024 NEON MONOLITH. ENGINEERED FOR DEPTH.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
