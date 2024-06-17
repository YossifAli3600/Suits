import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react'
import { RateStarsClick } from '../../../components/RateStarsClick/RateStarsClick';
import { TextInput } from '../../../components/Inputs/TextInput/TextInput';
import { FormattedMessage, useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { useMutation } from 'react-query';
import Button from '../../../components/Button/Button';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';

export const ReviewForm = () => {
    const intl = useIntl();
    const axios = useAxios();

    let { lawyerId } = useParams();

    const handleReview = useMutation({
        mutationFn: reviewApi,
        onSuccess: (data) => {
            toast.success(data.data.message);
            navigate("/");
        },
        onError: (error) => {
            handleMutationErr(error);
        },
    });

    function reviewApi(data) {
        return axios.post(`/review/add`, data);
    }
    return (
        <Formik
            initialValues={{ review_comment: '', rating: 0, lawyer_id: lawyerId, }}
            onSubmit={(values) => {
                handleReview.mutate(values)
            }}
        >
            {({ setFieldValue }) => (
                <Form className='bg-slate-100 p-5 rounded-xl my-8 dark:bg-slate-500 dark:text-white'>
                    <RateStarsClick setFieldValue={setFieldValue} />
                    <TextInput
                        label={<FormattedMessage id="shortDescription" />}
                        placeholder={intl.formatMessage({ id: "shortDescription" })}
                        type="text"
                        id="lawyer-review-description"
                        name="review_comment"
                        as="field"
                    />
                    <ErrorMessage name="review_comment" className="error" />
                    <Button type="submit" className="my-3 w-full"><FormattedMessage id='submit' /></Button>
                </Form>
            )}
        </Formik>
    )
}
