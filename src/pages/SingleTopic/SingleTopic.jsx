import React from 'react'
import { Page } from '../../components/Page/Page'
import { BsCalendar2Date } from "react-icons/bs";
import Loading from '../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router';
import { useSingleBlogData } from '../../queries/queries';

export const SingleTopic = () => {
    let { topicId } = useParams();

    const { data: topic, isLoading } = useSingleBlogData(topicId);
    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!topic) {
        content = <h2 className="fw-bolder text-center text-3xl my-10 dark:text-white"><FormattedMessage id='noData' /></h2>;
    } else {
        content =
            <div className='custom_container mt-16 gap-5 dark:text-white'>
                <h3 className='text-4xl font-extrabold'>{topic.title}</h3>
                <div className='flex items-center gap-3 px-1 opacity-85 mt-3'>
                    <div className='flex items-center gap-2'><span className='mb-1'><BsCalendar2Date /></span> <span>Oct 18, 2023</span></div>
                </div>
                <div className='rounded-xl overflow-hidden w-full mt-5 md:h-[500px]'>
                    <img src={topic.image} className='w-full object-cover' alt="Topic Image" />
                </div>

                <p className='my-11 text-xl ' dangerouslySetInnerHTML={{ __html: topic.description }}></p>
            </div>
    }
    return (
        <Page>
            {content}
        </Page>
    )
}
