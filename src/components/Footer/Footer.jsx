import React from 'react'
import { LogoComponent } from '../LogoComponent/LogoComponent'
import { FormattedMessage } from 'react-intl'

export const Footer = () => {
    return (
        <div className='bg-[#0f2a47] text-white'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between custom_container my-0 py-11'>
                <div className='text-4xl'>
                    <LogoComponent />
                    <p className='text-xl md:max-w-[60%] mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quaerat.
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold uppercase'><FormattedMessage id={"AboutWebsite"} /></h3>
                    <span className='px-2'><FormattedMessage id={"homePage"} /></span>
                    <span className='px-2'><FormattedMessage id={"topics"} /></span>
                    <span className='px-2'><FormattedMessage id={"about"} /></span>
                    <span className='px-2'><FormattedMessage id={"news"} /></span>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-bold uppercase'><FormattedMessage id={"account"} /></h3>
                    <span className='px-2'><FormattedMessage id={"login"} /></span>
                    <span className='px-2'><FormattedMessage id={"register"} /></span>
                </div>
            </div>
        </div>
    )
}
