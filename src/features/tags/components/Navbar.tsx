import { Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div >
            <nav className='fixed top-0  px-6 py-4 sm:px-12 lg:px-24 xl:px-40 backdrop-blur-lg border border-b-surface-variant/10 bg-background/70  w-full'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-foreground italic tracking-tight font-headline text-2xl'>Neon Monolith</h3>
                    </div>
                    <div className=' hidden md:flex gap-5 text-white/60 font-sans text-xs uppercase transition-colors duration-300'>
                        <a className='sm:hover:text-white' href="#articles">Articles</a>
                        <a className='sm:hover:text-white' href="#tutorials">tutorials</a>
                        <a className='sm:hover:text-white' href="#architecture">Architecture</a>
                        <a className='sm:hover:text-white' href="#manifesto">Manifesto</a>
                    </div>
                    <div className='flex items-center gap-6'>

                        <div className='relative group'>
                            <Search
                                size={20}
                                className='text-foreground/60 hover:text-foreground transition-colors duration-200' />
                        </div>
                        <button className='uppercase bg-primary-container font-sans tracking-widest transition-transform duration-300 hover:opacity-80 text-foreground/80 text-xs px-6 py-2 font-bold '>
                            subscribe
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
