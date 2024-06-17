import React from 'react';
import { useParams } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Loading from '../../components/Loading/Loading';
import { BookingInformation } from '../../features/SingleLawyer/BookingInformation/BookingInformation';
import { PersonalInformation } from '../../features/SingleLawyer/PersonalInformation/PersonalInformation';
import { useSingleLawyerData } from '../../queries/queries';
import { Page } from '../../components/Page/Page';

export const SingleLawyer = () => {
    let { lawyerId } = useParams();
    const { data: LawyerData, isLoading } = useSingleLawyerData(lawyerId);
    console.log(LawyerData)
    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!LawyerData) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noData' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-12 gap-8 m-auto'>
                <div className='col-span-12 md:col-span-7'><PersonalInformation LawyerData={LawyerData} /></div>
                <div className='col-span-12 md:col-span-5'><BookingInformation lawyer={LawyerData} /></div>
            </div>
        );
    }
    return (
        <Page style={"p-5"}>
           {content}
        </Page>
    );
};
