import React from 'react'
import { Cell, Row } from '../../../../components/Table/Table'
import { FormattedMessage } from 'react-intl'

export const AdsHistoryItem = ({ item }) => {
    console.log(item)
    return (
        <Row>
            <Cell>{item.service == 1 ? <FormattedMessage id='week' /> : <FormattedMessage id='month' />}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell className={`${item.status == "1" ? "bg-green-500" : item.status == "0" ? "bg-red-500" : "bg-blue-500"}`}>{item.status == 1 ? "Completed" : "Failed"}</Cell>
            <Cell>{item.created_at}</Cell>
        </Row>
    )
}
