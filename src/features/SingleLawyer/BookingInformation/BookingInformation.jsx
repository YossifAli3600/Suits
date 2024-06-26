import React from 'react'
import { PricesTab } from '../PricesTab/PricesTab'

export const BookingInformation = ({lawyer}) => {
    return (
        <div className='bg-slate-100 dark:bg-slate-500 dark:text-white  p-6 rounded-md'>
            <PricesTab lawyer={lawyer} />
        </div>
    )
}
