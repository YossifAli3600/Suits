import React from 'react'
import { useStore } from '../../../../zustand/store';

export const AuthUserDropDown = () => {
    const setAuthData = useStore((state) => state.setAuthData);
    return (
        <div className='flex flex-col items-center gap-3'>
            <span className='dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='hello' />{" "} , {authData.name}</span>
            <span onClick={() => setAuthData("")} className='cursor-pointer dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='logout' /></span>
        </div>
    )
}
