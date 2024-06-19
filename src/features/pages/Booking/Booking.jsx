import React from 'react'
import { useParams } from 'react-router';
import { Page } from '../../../components/Page/Page';
import SelectField from '../../../components/Inputs/SelectField';
import { useTopLawyersData } from '../../../queries/queries';
import { useSelectOptions } from '../../../hooks/useSelectOptions';
import { FormattedMessage, useIntl } from 'react-intl';
import useFormErr from '../../../hooks/useFormErr';
import { ErrorMessage, Formik } from 'formik';
import { Form } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import DateInput from '../../../components/DateInput/DateInput';

export const Booking = () => {
    const intl = useIntl();
    const { data: lawyers } = useTopLawyersData();
    console.log(lawyers)
    const { handleMutationErr, formErr } = useFormErr();
    const lawyersOptions = useSelectOptions({ data: lawyers, valueKey: 'id', labelKey: 'name' });
    console.log(lawyersOptions)
    let servicesOptions = [
        { value: 1, label: <FormattedMessage id='onlineMeeting' /> },
        { value: 2, label: <FormattedMessage id='chat' /> },
    ];
    return (
        <Page style={"custom_container"}>
            <Formik
                initialValues={{
                    lawyer_id: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
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
                            setDate={(date) => setFieldValue("date", date)}
                            id="date"
                            type="datetime"
                            label={<FormattedMessage id="date" />}
                        />
                        <Button className={"w-full"} type="submit">Pay</Button>
                    </Form>
                )}
            </Formik>
        </Page>
    )
}
