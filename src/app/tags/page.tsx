import Blogs from '@/features/tags/components/Blogs';
import EndLine from '@/features/tags/components/EndLine';
import Footer from '@/features/tags/components/Footer';
import Info from '@/features/tags/components/Info';
import Navbar from '@/features/tags/components/Navbar';
import React from 'react'

const TagPage = () => {
    return (
        <div className=' bg-background min-h-screen '>
            <div className='grain-overlay'></div>
            <Navbar />
            <Info />
            <Blogs />
            <EndLine />
            <Footer />
        </div>
    )
}

export default TagPage;
