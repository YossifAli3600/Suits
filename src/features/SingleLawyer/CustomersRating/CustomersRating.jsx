import React from 'react'
import { FormattedMessage } from 'react-intl'
import { RateStars } from '../../../components/RateStars/RateStars'

export const CustomersRating = ({ reviews }) => {
    let content;
    if (reviews.length > 0) {
        content = reviews.map(review => {
            return (
                <div className='bg-slate-100 dark:bg-slate-500 p-5 rounded-xl my-8'>
                    <h3 className=' dark:text-white font-extrabold text-lg mb-3 text-[#2C4768]'>{review.user_name}</h3>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <span><FormattedMessage id='rate' /> : </span>
                            <RateStars rate={review.rating} />
                        </div>
                        <FormattedMessage id='comment' /> {" : "}
                        {review.review_comment}
                    </div>
                </div>
            )
        })
    } else {
        content = <FormattedMessage id='noReviews' />
    }
    return (
        <div className='text-[#A3A4A5] dark:text-white'>
            <h3 className='text-2xl dark:text-white'>Reviews</h3>
            {content}
        </div>
    )
}
