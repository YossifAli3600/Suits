import React from 'react'
import { useMessagesData } from '../../queries/queries';
import Loading from '../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { IoIosMail } from "react-icons/io";

export const Messages = () => {
    const { data: messagesData, isLoading } = useMessagesData();
    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!messagesData || !messagesData.length) {
        content = <h2 className="fw-bolder text-center text-3xl my-10"><FormattedMessage id='noData' /></h2>;
    } else {
        content = messagesData.map((message) => {
            return (
                <div key={message.id} className='border border-black/60 rounded-md p-3 relative my-5'>
                    <h2 className='my-2 border-b border-black/60 pb-3'><FormattedMessage id='newMsgFrom' /> : {message.lawyer_name}</h2>
                    <p><FormattedMessage id='msgContent' /> : {message.message}</p>
                </div>
            )
        })
    }
    return (
        <div>{content}</div>
    )
}
