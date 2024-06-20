import React from 'react'
import Table, { Body, Header, HeaderCell } from '../../../../components/Table/Table'
import { ReservationItem } from './ReservationItem'
import { useBookingData } from '../../../../queries/queries';
import Loading from '../../../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { Page } from '../../../../components/Page/Page';

export const ReservationsHistory = () => {
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
                    <HeaderCell><FormattedMessage id='lawyer' /></HeaderCell>
                    <HeaderCell><FormattedMessage id='paymentStatus' /></HeaderCell>
                    <HeaderCell><FormattedMessage id='meetingDate' /></HeaderCell>
                    <HeaderCell><FormattedMessage id='reqDate' /></HeaderCell>
                </Header>
                <Body>
                    {bookingData.map((item) => {
                        return <ReservationItem key={item.id} item={item} />
                    })}
                </Body>
            </Table>

    }
    return (
        <Page>
            {content}
        </Page>
    )
}
