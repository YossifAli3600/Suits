import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export const UnAuthDropDown = () => {
    return (
        <div className='flex flex-col items-center gap-3'>
            <Link to={"/login"} className='cursor-pointer dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='login' /></Link>
            <Link to={"/register"} className='cursor-pointer dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='register' /></Link>
        </div>
    )
}
