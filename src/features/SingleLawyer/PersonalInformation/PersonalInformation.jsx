import React, { Fragment } from 'react'
import { BriefInformation } from '../BriefInformation/BriefInformation';
import { CustomersRating } from '../CustomersRating/CustomersRating';
import { LawyerInformation } from '../LawyerInformation/LawyerInformation';

export const PersonalInformation = ({ LawyerData }) => {
    return (
        <Fragment>
            <LawyerInformation LawyerData={LawyerData} />
            <BriefInformation />
            <CustomersRating />
        </Fragment>
    )
}
