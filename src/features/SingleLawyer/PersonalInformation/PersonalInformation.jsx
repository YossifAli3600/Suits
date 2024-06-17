import React, { Fragment } from 'react'
import { BriefInformation } from '../BriefInformation/BriefInformation';
import { CustomersRating } from '../CustomersRating/CustomersRating';
import { LawyerInformation } from '../LawyerInformation/LawyerInformation';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const PersonalInformation = ({ LawyerData }) => {
    return (
        <Fragment>
            <LawyerInformation LawyerData={LawyerData} />
            <BriefInformation />
            <ReviewForm />
            <CustomersRating reviews={LawyerData.reviews} />
        </Fragment>
    )
}
