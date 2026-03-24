import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
    return (
        <div className='px-6 py-10 sm:px-12 lg:px-24 xl:px-40'>
            <div className='px-6 grid grid-cols-1 md:grid-cols-2 gap-6 '>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />


            </div>

        </div>
    )
}

export default Blogs
