import React, { useRef } from 'react'
import { useParams } from 'react-router';
import { Page } from '../../../components/Page/Page';
import SelectField from '../../../components/Inputs/SelectField';
import { useTopLawyersData } from '../../../queries/queries';
import { useSelectOptions } from '../../../hooks/useSelectOptions';
import { FormattedMessage, useIntl } from 'react-intl';
import useFormErr from '../../../hooks/useFormErr';
import { ErrorMessage, Form, Formik } from 'formik';
import DateInput from '../../../components/DateInput/DateInput';
import Button from '../../../components/Button/Button';
import useAxios from '../../../hooks/useAxios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

export const Booking = () => {
    const intl = useIntl();
    const { data: lawyers } = useTopLawyersData();
    const { handleMutationErr, formErr } = useFormErr();
    const lawyersOptions = useSelectOptions({ data: lawyers, valueKey: 'id', labelKey: 'name' });
    let servicesOptions = [
        { value: 1, label: <FormattedMessage id='onlineMeeting' /> },
        { value: 2, label: <FormattedMessage id='chat' /> },
    ];

    const form = useRef();
    const axios = useAxios();
    const handleContact = useMutation({
        mutationFn: contactApi,
        onSuccess: (data) => {
            toast.success(data.data.message);
            form.current.resetForm();
        },
        onError: (err) => {
            handleMutationErr(err);
        },
    });

    function contactApi(data) {
        return axios.post("booking/add", data);
    }

    return (
        <Page style={"custom_container"}>
            <Formik
                initialValues={{
                    lawyer_id: '',
                    service: '',
                    metting_date: '',
                }}
                onSubmit={(values) => handleContact.mutate(values)}

            >
                {({ setFieldValue }) => (
                    <Form>
                        <div className='mb-3'>
                            <SelectField
                                title={<FormattedMessage id="lawyer" />}
                                placeholder={intl.formatMessage({ id: "lawyer" })}
                                name="lawyer_id"
                                options={lawyersOptions}
                                className="label-fit w-full"
                                id={"lawyer_id"}
                                type="select"
                                error={formErr?.lawyersOptions || <ErrorMessage name="lawyersOptions" />}
                            />
                        </div>
                        <div className='mb-3'>
                            <SelectField
                                title={<FormattedMessage id="service" />}
                                placeholder={intl.formatMessage({ id: "service" })}
                                name="service"
                                options={servicesOptions}
                                className="label-fit w-full"
                                id={"service"}
                                type="select"
                                error={formErr?.service || <ErrorMessage name="service" />}
                            />
                        </div>
                        <DateInput
                            setDate={(date) => setFieldValue("metting_date", date)}
                            id="metting_date"
                            type="datetime"
                            label={<FormattedMessage id="date" />}
                        />
                        <Button className={"w-full"} type="submit" >Pay</Button>
                    </Form>
                )}
            </Formik>
        </Page>
    )
}
