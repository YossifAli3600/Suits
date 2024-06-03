import React from 'react'
import styles from './BlogCard.module.css'
import { Link } from 'react-router-dom'
export const BlogCard = ({ sm, className }) => {
    return (
        <div className={`${styles.BlogCard} ${sm ? "max-w-sm" : ""} ${className} overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <div className='h-[50%] overflow-hidden'>
                <a href="#">
                    <img className="rounded-t-lg duration-1000 object-cover" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="" />
                </a>
            </div>
            <div className="p-5">
                <Link to={"/topic/1"}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to Get new National Id</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia commodi beatae nobis dicta, exercitationem ipsum deleniti libero magni alias harum sit.</p>
                <Link to={"/topic/1"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}
