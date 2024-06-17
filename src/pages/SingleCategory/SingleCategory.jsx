import React from 'react'
import { useParams } from 'react-router'
import Loading from '../../components/Loading/Loading';
import { LawyerCard } from '../../components/LawyerCard/LawyerCard';
import { SectionLayout } from '../../components/SectionLayout/SectionLayout';
import { FormattedMessage } from 'react-intl';
import { useSingleCategoryData } from '../../queries/queries';
import { Page } from '../../components/Page/Page';

export const SingleCategory = () => {
    const { categoryId } = useParams()
    const { data: lawyers, isLoading } = useSingleCategoryData(categoryId);
    console.log(lawyers)

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!lawyers || !lawyers.length) {
        content = <h2 className="fw-bolder text-2xl text-center"><FormattedMessage id='noLawyers' /></h2>;
    } else {
        content = (
            <div className='grid my-5 grid-cols-1 md:grid-cols-3 gap-8'>
                {lawyers.map((lawyer) => {
                    return (
                        <LawyerCard key={lawyer.id} lawyer={lawyer} />
                    );
                })}
            </div>
        );
    }
    return (
        <Page>
            <SectionLayout title={<span><FormattedMessage id='lawyersNumber' /> : <span>{lawyers ? lawyers?.length : 0}</span></span>}>
                {content}
            </SectionLayout>
        </Page>
    )
}
