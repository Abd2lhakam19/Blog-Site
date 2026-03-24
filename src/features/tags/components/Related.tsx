import React from 'react'

const Related = ({ name }: { name: string }) => {
    return (
        <div>
            <a href="" className='border border-foreground px-4 py-1.5 rounded-full text-foreground
             text-[11px] font-bold tracking-widest hover:bg-primary-container transition-colors duration-200
              hover:border-primary-container uppercase'> {name}</a>
        </div>
    )
}

export default Related
