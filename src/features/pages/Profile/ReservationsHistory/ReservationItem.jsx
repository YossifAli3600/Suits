import React from 'react'
import { Cell, Row } from '../../../../components/Table/Table'
import { FormattedMessage } from 'react-intl'

export const ReservationItem = ({ item }) => {
    return (
        <Row>
            <Cell>{item.service == 1 ? <FormattedMessage id='onlineMeeting' /> : <FormattedMessage id='chat' />}</Cell>
            <Cell>{item.lawyer}</Cell>
            <Cell className={`${item.pay_status == "1" ? "bg-green-500" : item.pay_status == "2" ? "bg-red-500" : "bg-blue-500"}`}>{item.pay_status}</Cell>
            <Cell>{item.metting_date || "___"}</Cell>
            <Cell>{item.created_at}</Cell>
        </Row>
    )
}
