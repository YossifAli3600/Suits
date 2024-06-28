import React from 'react'
import { useLawyerMessagesData, useMessagesData } from '../../queries/queries';
import Loading from '../../components/Loading/Loading';
import { FormattedMessage } from 'react-intl';
import { IoIosMail } from "react-icons/io";
import { ChatForm } from '../../features/pages/Profile/ReservationsHistory/ChatForm';
import { ChatLawyerForm } from '../../features/pages/Profile/ReservationsHistory/ChatLawyerForm';

export const LawyerMessages = () => {
    const { data: messagesData, isLoading } = useLawyerMessagesData();
    let content;
    if (isLoading) {
        content = <Loading />;
    }
    else if (!messagesData || !messagesData.length) {
        content = <h2 className="fw-bolder text-center text-3xl my-10"><FormattedMessage id='noData' /></h2>;
    } else {
        content = messagesData.filter((item) => item.sender_type == "User").map((message) => {
            return (
                <div key={message.id} className='border border-black/60 rounded-md p-3 relative my-5'>
                    <h2 className='my-2 border-b border-black/60 pb-3'><FormattedMessage id='newMsgFrom' /> : {message.lawyer_name}</h2>
                    <p><FormattedMessage id='msgContent' /> : {message.message}</p>
                    <ChatLawyerForm msg={message} />
                </div>
            )
        })
    }
    return (
        <div>{content}</div>
    )
}
