import React from 'react'
import { Cell, Row } from '../../../../components/Table/Table'
import { FormattedMessage } from 'react-intl'

export const ReservationItem = ({ item }) => {
    return (
        <Row>
            <Cell>{item.service == 1 ? <FormattedMessage id='onlineMeeting' /> : <FormattedMessage id='chat' />}</Cell>
            <Cell>{item.lawyer_name}</Cell>
            <Cell className={`${item.status == "1" ? "bg-green-200" : item.status == "0" ? "bg-red-300" : "bg-blue-200"}`}>{item.status == 1 ? "Completed" : "Failed"}</Cell>
            <Cell>{item.metting_date || "___"}</Cell>
            <Cell>{item.created_at}</Cell>
        </Row>
    )
}
