import React from 'react'
import ErrorVector from '../../assets/images/Error.png'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
    let theme = localStorage.getItem('theme')
    console.log(theme)
    return (
        <div className={`${styles.error__page} flex items-center justify-center flex-col custom px-5 ${theme == 'dark' ? 'bg-slate-600' : 'bg-white'}`}>
            <div className="flex items-center justify-center flex-col md:flex-row">
                <div><img src={ErrorVector} className='w-full' alt="ErrorVector" /></div>
                <div className="mb-5 flex flex-col gap-4 text-emerald-300 text-2xl">
                    <h1 className="font-bold mb-0">Sorry, something went wrong</h1>
                    <h4 className="mb-0">Unexpected Error happened, please try again</h4>
                    <div className="flex flex-col content-center lg:flex-row lg:gap-2">
                        <div className='m-auto'>
                            <button className='border px-2 m-auto bg-emerald-300 text-white rounded-xl'>
                                <Link to="/" className="">
                                    Home page
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
