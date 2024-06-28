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

export const ChatForm = ({ lawyers }) => {
    const intl = useIntl();
    const form = useRef();
    const axios = useAxios();
    const lawyersOptions = useSelectOptions({ data: lawyers, valueKey: 'id', labelKey: 'name' });
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
        return axios.post(`send/message/${data.lawyer_id}`, data);
    }
    return (
        <Formik
            innerRef={form}
            initialValues={{
                lawyer_id: "",
                message: "",
            }}
            onSubmit={(values) => {
                console.log(values)
                handleChat.mutate(values);
            }}
        >
            <Form className='border rounded-xl p-5 my-5'>
                <h3 className='text-center'><FormattedMessage id='startChatWithYourLawyers' /></h3>
                <SelectField
                    title={<FormattedMessage id="lawyer" />}
                    placeholder={intl.formatMessage({ id: "lawyer" })}
                    name="lawyer_id"
                    options={lawyersOptions}
                    className="label-fit w-full my-3"
                    id={"lawyer_id"}
                    type="select"
                />
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
