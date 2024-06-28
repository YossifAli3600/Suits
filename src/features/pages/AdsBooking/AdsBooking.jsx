import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router';
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
import { lawerPaymentSchema } from '../../../schemas/lawerPaymentSchema';

export const AdsBooking = () => {
    const intl = useIntl();
    const { data: lawyers } = useTopLawyersData();
    const { handleMutationErr, formErr } = useFormErr();
    const lawyersOptions = useSelectOptions({ data: lawyers, valueKey: 'id', labelKey: 'name' });
    let servicesOptions = [
        { value: 1, label: <><FormattedMessage id='week' /> : 500 <FormattedMessage id='egp' /></> },
        { value: 2, label: <><FormattedMessage id='month' /> : 1500 <FormattedMessage id='egp' /> </> },
    ];
    let navigate = useNavigate()
    const form = useRef();
    const axios = useAxios();
    const handleBooking = useMutation({
        mutationFn: paymentApi,
        onSuccess: (data) => {
            window.open(data.data.data.pay_link, '_blank');
            toast.success(data.data.message);
            navigate("/profile/Ads-history")
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
                validationSchema={lawerPaymentSchema}
                initialValues={{
                    service: '',
                }}
                onSubmit={(values) => handleBooking.mutate(values)}

            >
                {({ setFieldValue }) => (
                    <Form>
                        <h3 className='text-2xl text-center dark:text-white'><FormattedMessage id='advertisingRequest' /></h3>
                        <div className='mb-3'>
                            <SelectField
                                title={<FormattedMessage id="duration" />}
                                placeholder={intl.formatMessage({ id: "duration" })}
                                name="service"
                                options={servicesOptions}
                                className="label-fit w-full"
                                id={"service"}
                                type="select"
                                error={formErr?.service || <ErrorMessage name="service" />}
                            />
                        </div>
                        <Button isLoading={handleBooking.isLoading} className={"w-full"} type="submit"><FormattedMessage id='pay' /></Button>
                    </Form>
                )}
            </Formik>
        </Page>
    )
}
