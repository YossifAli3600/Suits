import React from 'react'
import { Page } from '../../components/Page/Page'
import { SectionLayout } from '../../components/SectionLayout/SectionLayout';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLawyersData } from '../../queries/queries';
import Loading from '../../components/Loading/Loading';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { LawyerCard } from '../../components/LawyerCard/LawyerCard';
import FilterComp from '../../components/FilterComp/FilterComp';

export const Lawyers = () => {
    const { data: lawyers, isLoading } = useLawyersData();
    let intl = useIntl();
    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!lawyers || !lawyers.length) {
        content = <h2 className="fw-bolder text-center text-2xl"><FormattedMessage id='noLawyers' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
            <SectionLayout title={<span><FormattedMessage id='lawyerNumber' /> : <span>{lawyers ? lawyers?.length : 0}</span></span>}>
                <FilterComp placeholder={intl.formatMessage({ id: "name" })} placeholder2={intl.formatMessage({ id: "department" })} name={"lawyers"} isLoading={isLoading} />
                {content}
            </SectionLayout>
        </Page>
    )
}
