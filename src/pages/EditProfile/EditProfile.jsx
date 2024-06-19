import React, { useRef } from 'react'
import { Page } from '../../components/Page/Page'
import { useUserData } from '../../queries/queries';
import { ErrorMessage, Form, Formik } from 'formik';
import { TextInput } from '../../components/Inputs/TextInput/TextInput';
import { FormattedMessage, useIntl } from 'react-intl';
import { MdOutlineMailOutline, MdOutlineLock, MdOutlineContactMail, MdOutlinePhoneAndroid } from "react-icons/md";
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useFormErr from '../../hooks/useFormErr';
import { FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import useAxios from '../../hooks/useAxios';
import { useMutation } from 'react-query';

export const EditProfile = () => {
    const { data: user, isLoading } = useUserData();
    const { handleMutationErr, formErr } = useFormErr();
    const form = useRef();
    const axios = useAxios();
    const intl = useIntl();
    const handleEditProfile = useMutation({
        mutationFn: editProfileApi,
        onSuccess: (data) => {
            toast.success(data.data.message);
        },
        onError: (err) => {
            toast.error(err.response.data.message);
        },
    });

    function editProfileApi(data) {
        console.log(data)
        return axios.post("profile/update", data);
    }

    const initialValues = {
        ...user
    };
    console.log(initialValues)
    let content;
    if (isLoading) {
        content = <Loading />
    } else if (!user) {
        navigate('/login');
        toast.success(<FormattedMessage id='loginFirst' />)
    } else {
        content =
            <Formik
                innerRef={form}
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleEditProfile.mutate(values)
                }}
            >
                {({ values, setFieldValue, errors }) => (
                    <Form>
                        <h1 className='text-center text-2xl'><FormattedMessage id='editProfile' /></h1>
                        <div className="flex items-center justify-center mb-3">
                            <TextInput
                                label={<FormattedMessage id="name" />}
                                icon={<span className='text-red-500 dark:text-white'><MdOutlineContactMail size={25} /></span>}
                                placeholder={intl.formatMessage({ id: "name" })}
                                type="text"
                                id="register-name"
                                name="name"
                                error={<ErrorMessage name="name" />}
                                as="field"
                                required
                                value={values.name}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-3">
                            <TextInput
                                label={<FormattedMessage id="email" />}
                                icon={<span className='text-red-500 dark:text-white'><MdOutlineMailOutline size={25} /></span>}
                                placeholder={intl.formatMessage({ id: "email" })}
                                type="text"
                                id="register-email"
                                name="email"
                                error={<ErrorMessage name="email" />}
                                as="field"
                                required
                                value={values.email}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-3">
                            <TextInput
                                label={<FormattedMessage id="phone" />}
                                icon={<span className='text-red-500 dark:text-white'><FaPhoneAlt size={20} /></span>}
                                placeholder={intl.formatMessage({ id: "phone" })}
                                type="text"
                                id="register-phone"
                                name="phone"
                                error={<ErrorMessage name="phone" />}
                                as="field"
                                required
                                value={values.phone}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-3">
                            <TextInput
                                label={<FormattedMessage id="address" />}
                                icon={<span className='text-red-500 dark:text-white'><FaAddressCard size={25} /></span>}
                                placeholder={intl.formatMessage({ id: "address" })}
                                type="text"
                                id="register-address"
                                name="address"
                                error={<ErrorMessage name="address" />}
                                as="field"
                                value={values.address}
                                required
                            />
                        </div>
                        <input
                            className={`bg-red-500 text-white cursor-pointer w-full p-2 px-5 rounded-xl`}
                            type="submit"
                            value={intl.formatMessage({ id: 'update' })}
                        />
                    </Form>
                )}
            </Formik>
    }

    return (
        <Page style="custom_container">
            {content}
        </Page>
    )
}
