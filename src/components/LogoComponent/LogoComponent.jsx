import React from 'react'
import Logo from '../../assets/images/Logo.png';
import { FormattedMessage } from 'react-intl';

export const LogoComponent = () => {
    return (
        <div className={`flex items-center gap-3 w-[70px] h-[50px]`}>
            <img src={Logo} alt="Logo" className='w-full h-full' />
            <span className='text-2xl font-bold uppercase text-orange-300'><FormattedMessage id='suits' /></span>
        </div>
    )
}
