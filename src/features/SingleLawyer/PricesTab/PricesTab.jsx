import React, { Fragment } from 'react'
import { useParams } from 'react-router';
import { PriceCard } from '../PriceCard/PriceCard'
import { FormattedMessage } from 'react-intl';

export const PricesTab = ({ lawyer }) => {
    let services = [
        {
            id: "1",
            title: < FormattedMessage id='onlineMeeting' />,
            intro: <FormattedMessage id='meetingIntro' />,
            price: lawyer.metting_price,
        },
        {
            id: "2",
            title: <FormattedMessage id='chat' />,
            intro: <FormattedMessage id='chatIntro' />,
            price: lawyer.chat_price,
        },
    ]
    return (
        <Fragment>
            {services.map((service, index) => {
                return (
                    <PriceCard lawyer={lawyer} key={`service__${index}`} service={service} />
                )
            })}
        </Fragment>
    )
}
