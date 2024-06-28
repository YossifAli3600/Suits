import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router';
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
import { useState } from 'react';
import { BookingSchema } from '../../../schemas/BookingSchema';
import { Error } from '../../../components/Error/Error';

export const Booking = () => {
    const location = useLocation();
    const [serviceId, setServiceId] = useState("")
    const [lawyerId, setLawyerId] = useState("")
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const service = searchParams.get('service_id');
        const lawyer = searchParams.get('lawyer');
        setServiceId(service)
        setLawyerId(lawyer)
    }, [location.search]);

    const intl = useIntl();
    let navigate = useNavigate();
    const { data: lawyers } = useTopLawyersData();
    const { handleMutationErr, formErr } = useFormErr();
    const lawyersOptions = useSelectOptions({ data: lawyers, valueKey: 'id', labelKey: 'name' });
    let servicesOptions = [
        { value: 1, label: <FormattedMessage id='onlineMeeting' /> },
        { value: 2, label: <FormattedMessage id='chat' /> },
    ];

    const form = useRef();
    const axios = useAxios();
    const handleBooking = useMutation({
        mutationFn: paymentApi,
        onSuccess: (data) => {
            window.open(data.data.data.pay_link, '_blank');
            toast.success(data.data.message);
            navigate("/profile/reservations-history")
        },
        onError: (err) => {
            handleMutationErr(err);
        },
    });

    function paymentApi(data) {
        return axios.post("pay/paymob", data);
    }

    return (
        <Page style={"custom_container"}>
            <Formik
                validationSchema={BookingSchema}
                initialValues={{
                    lawyer_id: Number(lawyerId),
                    service: Number(serviceId),
                    metting_date: '',
                }}
                enableReinitialize
                onSubmit={(values) => handleBooking.mutate(values)}
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
                        <span className='text-red-500'><FormattedMessage id='dateInfo' /></span>
                        <Error className={"mb-3"}><span><ErrorMessage name='metting_date' /></span></Error>
                        <Button isLoading={handleBooking.isLoading} className={"w-full"} type="submit" ><FormattedMessage id='pay' /></Button>
                    </Form>
                )}
            </Formik>
        </Page >
    )
}
