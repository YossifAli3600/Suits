import React from 'react'
import styles from './BlogCard.module.css'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
export const BlogCard = ({ blog, sm, className, limit }) => {
    return (
        <div className={`${styles.BlogCard} ${sm ? "max-w-sm" : ""} ${className} relative overflow-hidden flex flex-col items-center ju bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <div className='h-[250px] w-full overflow-hidden'>
                <img className="rounded-t-lg duration-1000 w-full h-full object-cover" src={blog.image} alt="" />
            </div>
            <div className="p-5 mb-8">
                <Link to={`/topic/${blog.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: !limit ? blog.description.slice(0, 200) + "..." : blog.description }} className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            </div>
            <div className='absolute bottom-[15px]'>
                <Link to={`/topic/${blog.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FormattedMessage id='readMore' />
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}
