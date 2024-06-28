import React from 'react'
import Logo from '../../assets/images/logo2.PNG';
import { FormattedMessage } from 'react-intl';

export const LogoComponent = ({ bg }) => {
    return (
        <div className={`flex items-center gap-3 w-[150px] h-[80px] dark:text-white`}>
            <div className={`${bg ? bg : ""} w-full h-full`}><img src={Logo} alt="Logo" className={`w-full h-full mr-[3px] `} /></div>
            <span className='text-2xl font-bold uppercase'><FormattedMessage id='suits' /></span>
        </div>
    )
}
