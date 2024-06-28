import { Form, Formik } from 'formik';
import React, { useRef } from 'react'
import SelectField from '../../../../components/Inputs/SelectField';
import { FormattedMessage, useIntl } from 'react-intl';
import useAxios from '../../../../hooks/useAxios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import TextboxInput from '../../../../components/Inputs/TextboxInput';
import { useSelectOptions } from '../../../../hooks/useSelectOptions';
import Button from '../../../../components/Button/Button';

export const ChatLawyerForm = ({ msg }) => {
    const intl = useIntl();
    const form = useRef();
    const axios = useAxios();
    const handleChat = useMutation({
        mutationFn: chatApi,
        onSuccess: (data) => {
            toast.success(data.data.message);
            form.current.resetForm();
        },
        onError: (err) => {
            toast.error(err.response.data.message);
        },
    });

    function chatApi(data) {
        return axios.post(`lawyer/dashboard/chats/reply/${data.msg_id}`, data);
    }
    return (
        <Formik
            innerRef={form}
            initialValues={{
                msg_id: msg.id,
                message: "",
            }}
            onSubmit={(values) => {
                console.log(values)
                handleChat.mutate(values);
            }}
        >
            <Form className='border rounded-xl p-5 my-5'>
                <h3 className='text-center'><FormattedMessage id='replyToCustomer' /></h3>
                <TextboxInput
                    className={"my-3"}
                    label={<FormattedMessage id="message" />}
                    placeholder={intl.formatMessage({ id: "message" })}
                    id="message"
                    name="message"
                    type="text"
                    as="field"
                />
                <Button isLoading={handleChat.isLoading} type={"submit"} className={"w-full"}><FormattedMessage id='send' /></Button>
            </Form>
        </Formik>
    )
}
