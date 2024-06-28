import React from 'react'
import { FormattedMessage } from 'react-intl'

export const BriefInformation = ({ LawyerData }) => {
    console.log(LawyerData)
    return (
        <div className='bg-slate-100 p-5 rounded-xl my-8 dark:bg-slate-500 dark:text-white'>
            <h3 className=' dark:text-white font-extrabold text-2xl mb-8 text-[#2C4768]'><FormattedMessage id='briefInformation' /></h3>
            <p className='text-[#A3A4A5] dark:text-white'>{LawyerData.description ? LawyerData.description : <FormattedMessage id='noData' />}</p>
        </div>
    )
}
