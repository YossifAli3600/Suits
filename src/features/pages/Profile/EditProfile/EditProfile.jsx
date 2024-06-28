import React, { useRef } from 'react'
import { Page } from '../../../../components/Page/Page'
import { useLawyerProfileData, useUserData } from '../../../../queries/queries';
import { ErrorMessage, Form, Formik } from 'formik';
import { TextInput } from '../../../../components/Inputs/TextInput/TextInput';
import { FormattedMessage, useIntl } from 'react-intl';
import { MdOutlineMailOutline, MdOutlineLock, MdOutlineContactMail, MdOutlinePhoneAndroid } from "react-icons/md";
import Loading from '../../../../components/Loading/Loading';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useFormErr from '../../../../hooks/useFormErr';
import { FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import useAxios from '../../../../hooks/useAxios';
import { useMutation } from 'react-query';
import { useStore } from '../../../../zustand/store';
import PicInput from '../../../../components/PicInput/PicInput';
import Button from '../../../../components/Button/Button';

export const EditProfile = () => {
    const authData = useStore((state) => state.authData);
    const { data: user, isLoading } = authData.type == "User" ? useUserData() : useLawyerProfileData();
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
        return axios.post(authData.type == "User" ? "profile/update" : "lawyer/dashboard/profile/update", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
    }

    const initialValues = {
        ...user,
        image: "",
    };
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
                    console.log(values)
                    if (!values.image) {
                        delete (values.image);
                    }
                    console.log(values)
                    handleEditProfile.mutate(values)
                }}
            >
                {({ values, setFieldValue, errors }) => (
                    <Form className='mx-8 md:mx-0'>
                        <h1 className='text-center text-2xl'><FormattedMessage id='editProfile' /></h1>
                        {authData.type == "Lawyer" &&
                            <PicInput
                                info={<FormattedMessage id='image' />}
                                values={values}
                                name="image"
                                setFieldValue={setFieldValue}
                                oldFile={user?.image}
                                backError={formErr?.image}
                                error={<ErrorMessage name="image" />}
                            />
                        }
                        <div className="flex items-center justify-center mb-3">
                            <TextInput
                                label={<FormattedMessage id="name" />}
                                icon={<span className='text-sky-400 dark:text-white'><MdOutlineContactMail size={25} /></span>}
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
                        {authData.type == "Lawyer" &&
                            <div className="flex items-center justify-center mb-3">
                                <TextInput
                                    label={<FormattedMessage id="description" />}
                                    icon={<span className='text-sky-400 dark:text-white'><MdOutlineContactMail size={25} /></span>}
                                    placeholder={intl.formatMessage({ id: "description" })}
                                    type="text"
                                    id="profile-description"
                                    name="description"
                                    error={<ErrorMessage name="description" />}
                                    as="field"
                                    required
                                    value={values.description}
                                />
                            </div>
                        }

                        <div className="flex items-center justify-center mb-3">
                            <TextInput
                                label={<FormattedMessage id="email" />}
                                icon={<span className='text-sky-400 dark:text-white'><MdOutlineMailOutline size={25} /></span>}
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
                                icon={<span className='text-sky-400 dark:text-white'><FaPhoneAlt size={20} /></span>}
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
                                icon={<span className='text-sky-400 dark:text-white'><FaAddressCard size={25} /></span>}
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
                        <Button isLoading={handleEditProfile.isLoading} type={"submit"} className={"w-full"}><FormattedMessage id='update' /></Button>
                    </Form>
                )}
            </Formik>
    }

    return (
        <div className="custom_container">
            {content}
        </div>
    )
}
