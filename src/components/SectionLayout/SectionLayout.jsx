import React from 'react'

export const SectionLayout = ({ title, children }) => {
    return (
        <div className='custom_container my-18'>
            <h3 className='text-2xl dark:text-white hover:text-[1.8rem] transition-all duration-1000 mx-auto'>{title}</h3>
            <div className='py-8'>{children}</div>
        </div>
    )
}
