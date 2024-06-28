import React from 'react'
import Table, { Body, Header, HeaderCell } from '../../../../components/Table/Table'
import { useBookingData } from '../../../../queries/queries';
import Loading from '../../../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { Page } from '../../../../components/Page/Page';
import { AdsHistoryItem } from './AdsHistoryItem';
import { Link } from 'react-router-dom';

export const AdsHistory = () => {
    const { data: bookingData, isLoading } = useBookingData();
    console.log(bookingData)
    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!bookingData || !bookingData.length) {
        content = <h2 className="fw-bolder text-center text-3xl my-10"><FormattedMessage id='noData' /></h2>;
    } else {
        content =
            <Table>
                <Header>
                    <HeaderCell><FormattedMessage id='service' /></HeaderCell>
                    <HeaderCell><FormattedMessage id='price' /></HeaderCell>
                    <HeaderCell><FormattedMessage id='paymentStatus' /></HeaderCell>
                    <HeaderCell><FormattedMessage id='reqDate' /></HeaderCell>
                </Header>
                <Body>
                    {bookingData.map((item) => {
                        return <AdsHistoryItem key={item.id} item={item} />
                    })}
                </Body>
            </Table>

    }
    return (
        <Page>
            <Link to={"/ads_booking"} className='bg-blue-500 rounded-md p-3 text-white'><FormattedMessage id='newAd' /></Link>
            {content}
        </Page>
    )
}
