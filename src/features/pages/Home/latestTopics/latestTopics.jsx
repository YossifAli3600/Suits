import React from 'react'
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout'
import { FormattedMessage } from 'react-intl'
import { BlogCard } from '../../../../components/BlogCard/BlogCard'
import { Link } from 'react-router-dom'

export const LatestTopics = () => {
    return (
        <SectionLayout title={<FormattedMessage id='latestTopics' />}>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 w-fit m-auto`}>
                <BlogCard sm />
                <BlogCard sm />
                <BlogCard sm />
                <BlogCard sm />
                <BlogCard sm />
                <BlogCard sm />
            </div>
            <div className='text-center mt-8'>
                <Link to={'/topics'} className='bg-[#DDB762] text-white rounded-lg p-2 hover:bg-transparent hover:text-black dark:hover:text-white transition-all duration-700 '><FormattedMessage id="viewAll" /></Link>
            </div>
        </SectionLayout>
    )
}
