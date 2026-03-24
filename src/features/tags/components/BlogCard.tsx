import { ArrowRight } from 'lucide-react'
import React from 'react'

const BlogCard = () => {
    return (
        <div className='bg-[#111113] group relative flex flex-col p-8 border border-surface-variant transition-colors duration-300 hover:border-primary-container'>
            <div className='aspect-video w-full overflow-hidden mb-8'>
                <img src='/blog.png' alt="" className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100' />
            </div>
            <div className='flex items-center gap-4 mb-4'>
                <span className='uppercase font-mono text-[10px] text-primary tracking-widest'>case study</span>
                <span className='h-px w-8 bg-surface-bright'></span>
                <span className='font-mono text-[10px] uppercase tracking-widest text-foreground/80'>Oct 12, 2024</span>
            </div>
            <h2 className='font-headline text-4xl text-foreground mb-4 transition-colors duration-300 group-hover:text-primary-container'>
                The Ghost in the Machine: Navigating Legacy Monoliths
            </h2>
            <p className='text-sm leading-relaxed mb-8 grow text-foreground/70'>
                An editorial deep-dive into the psychological and technical debt of 10-year-old architectures and the strategies for successful extraction.
            </p>
            <div className='flex justify-between items-center pt-6 border-t border-surface-variant'>
                <span className='font-sans text-xs text-white/40 italic'>
                    Written by Elias Thorne
                </span>
                <ArrowRight className='opacity-0 group-hover:opacity-100 text-primary-container transition-transform duration-300 translate-x-0 group-hover:translate-x-4' />
            </div>

        </div>
    )
}

export default BlogCard
