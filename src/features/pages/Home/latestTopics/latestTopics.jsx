import React from 'react'
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout'
import { FormattedMessage } from 'react-intl'
import { BlogCard } from '../../../../components/BlogCard/BlogCard'
import { Link } from 'react-router-dom'
import { useBlogsData } from '../../../../queries/queries'
import Loading from '../../../../components/Loading/Loading'

export const LatestTopics = () => {
    const { data: blogs, isLoading } = useBlogsData();

    let content;
    if (isLoading) {
        content = <Loading />
    } else if (!blogs || !blogs.length) {
        content = <span className='text-2xl dark:text-white'><FormattedMessage id='noBlogs' /></span>
    } else {
        content =
            <>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 w-full m-auto`}>
                    {blogs.slice(0, 6).map((blog) => {
                        return (
                            <BlogCard key={blog.id} blog={blog} />
                        )
                    })}
                </div>
                <div className='text-center mt-8'>
                    <Link to={'/topics'} className='bg-[#DDB762] text-white rounded-lg p-2 hover:bg-transparent hover:text-black dark:hover:text-white transition-all duration-700 '><FormattedMessage id="viewAll" /></Link>
                </div>
            </>

    }

    return (
        <SectionLayout title={<FormattedMessage id='latestTopics' />}>
            {content}
        </SectionLayout>
    )
}
