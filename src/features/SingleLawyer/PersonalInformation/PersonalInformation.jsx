import React, { Fragment } from 'react'
import { BriefInformation } from '../BriefInformation/BriefInformation';
import { CustomersRating } from '../CustomersRating/CustomersRating';
import { LawyerInformation } from '../LawyerInformation/LawyerInformation';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { useStore } from '../../../zustand/store';

export const PersonalInformation = ({ LawyerData }) => {
    const authData = useStore((state) => state.authData);

    return (
        <Fragment>
            <LawyerInformation LawyerData={LawyerData} />
            <BriefInformation LawyerData={LawyerData} />
            {authData && <ReviewForm />}
            <CustomersRating reviews={LawyerData.reviews} />
        </Fragment>
    )
}
