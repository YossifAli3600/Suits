import React from 'react';
import { useParams } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Loading from '../../components/Loading/Loading';
import { BookingInformation } from '../../features/SingleLawyer/BookingInformation/BookingInformation';
import { PersonalInformation } from '../../features/SingleLawyer/PersonalInformation/PersonalInformation';

export const SingleLawyer = () => {
    let { lawyerId } = useParams();
    // const { data: LawyerData, isLoading } = useLawyerData(lawyerId);
    let isLoading = false;
    let LawyerData = {
        name: "محمد ماجد ماجد التهامي",
        about: "محامي متخصص لقضايا البرمجة",
        photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    };
    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!LawyerData) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noCategories' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-12 gap-8 m-auto'>
                <div className='col-span-12 md:col-span-7'><PersonalInformation LawyerData={LawyerData} /></div>
                <div className='col-span-12 md:col-span-5'><BookingInformation /></div>
            </div>
        );
    }
    return (
        <div className='custom_container'>
            {content}
        </div>
    );
};
