import React, { useState } from 'react'
import './LawyerRegister.css'
import lawyerImg from '../../assets/images/lawyerImg.png'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useMutation } from 'react-query';
import { useStore } from '../../zustand/store';
import useAxios from '../../hooks/useAxios';
import useFormErr from '../../hooks/useFormErr';
import { FormattedMessage, useIntl } from 'react-intl';
import { TextInput } from '../../components/Inputs/TextInput/TextInput';
import { MdOutlineMailOutline, MdOutlineLock, MdOutlineContactMail, MdOutlinePhoneAndroid } from "react-icons/md";
import { PiAddressBook } from "react-icons/pi";
import CheckboxField from '../../components/Inputs/CheckboxField';
import { Error } from '../../components/Error/Error';
import { HiMiniIdentification } from "react-icons/hi2";
import PicInput from '../../components/PicInput/PicInput';
import { useSelectOptions } from '../../hooks/useSelectOptions';
import { useCategoriesData } from '../../queries/queries';
import SelectField from '../../components/Inputs/SelectField';
import { lawyerRegisterSchema } from '../../schemas/lawyerRegisterSchema';

export const LawyerRegister = () => {
    const axios = useAxios();
    const setAuthData = useStore((state) => state.setAuthData);
    const { handleMutationErr, formErr } = useFormErr();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const initialValues = {
        image: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        department_id: "",
        national_id: "",
        file: null
    };
    const handleRegister = useMutation({
        mutationFn: registerApi,
        onSuccess: (data) => {
            toast.success(data.data.message);
            setLoading(false);
        },
        onError: (error) => {
            handleMutationErr(error);
            setLoading(false);
        },
    });

    function registerApi(data) {
        return axios.post(`/lawyer/register`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    }

    const intl = useIntl();
    const { data: categories } = useCategoriesData();
    const departmentsOptions = useSelectOptions({ data: categories, valueKey: 'department_id', labelKey: 'name' });

    return (
        <div className='my-5'>
            <div className='LoginPage m-auto rounded-2xl overflow-hidden'>
                <div className=' bg-white dark:bg-slate-500 shadow-lg formDiv'>
                    <div className="h-full flex items-center content-center p-8 dark:text-white">
                        <Formik
                            validationSchema={lawyerRegisterSchema}
                            initialValues={initialValues}
                            onSubmit={(values) => {
                                values.agree_terms = values.agree_terms == true ? 1 : 2
                                handleRegister.mutate(values)
                                setLoading(true)
                            }
                            }>
                            {({ values, setFieldValue, errors }) => (
                                <Form>
                                    {console.log(values)}
                                    {console.log(errors)}
                                    <h3 className='text-center mb-5 text-2xl'><FormattedMessage id='createNewLawyerAccount' /></h3>

                                    <PicInput
                                        info={<FormattedMessage id='image' />}
                                        values={values}
                                        name="image"
                                        setFieldValue={setFieldValue}
                                        backError={formErr?.image}
                                        error={<ErrorMessage name="image" />}
                                    />

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
                                        />
                                    </div>

                                    <div className='grid md:grid-cols-2 gap-2 items-stretch h-full'>

                                        <div className="flex items-center md:items-start justify-center mb-3 h-full">
                                            <TextInput
                                                label={<FormattedMessage id="nationalId" />}
                                                icon={<span className='text-red-500 dark:text-white'><HiMiniIdentification size={25} /></span>}
                                                placeholder={intl.formatMessage({ id: "nationalId" })}
                                                type="text"
                                                id="register-national_id"
                                                name="national_id"
                                                error={<ErrorMessage name="national_id" />}
                                                as="field"
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center md:items-start justify-center mb-3 h-full">
                                            <TextInput
                                                label={<FormattedMessage id="phone" />}
                                                icon={<span className='text-red-500 dark:text-white'><MdOutlinePhoneAndroid size={25} /></span>}
                                                placeholder={intl.formatMessage({ id: "phone" })}
                                                type="text"
                                                id="register-phone"
                                                name="phone"
                                                error={<ErrorMessage name="phone" />}
                                                as="field"
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div className="flex items-center justify-center mb-3">
                                        <TextInput
                                            label={<FormattedMessage id="address" />}
                                            icon={<span className='text-red-500 dark:text-white'><PiAddressBook size={25} /></span>}
                                            placeholder={intl.formatMessage({ id: "address" })}
                                            type="text"
                                            id="register-address"
                                            name="address"
                                            error={<ErrorMessage name="address" />}
                                            as="field"
                                            required
                                        />
                                    </div>

                                    <div className='grid md:grid-cols-2 gap-2 items-stretch'>

                                        <div className="flex items-center md:items-start justify-center mb-3 h-full">
                                            <TextInput
                                                label={<FormattedMessage id="password" />}
                                                icon={<span className='text-red-500 dark:text-white'><MdOutlineLock size={25} /></span>}
                                                placeholder={intl.formatMessage({ id: "password" })}
                                                type="password"
                                                id="register-Password"
                                                name="password"
                                                error={<ErrorMessage name="password" />}
                                                as="field"
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center md:items-start justify-center mb-3 h-full">
                                            <TextInput
                                                label={<FormattedMessage id="confirmPassword" />}
                                                icon={<span className='text-red-500 dark:text-white'><MdOutlineLock size={25} /></span>}
                                                placeholder={intl.formatMessage({ id: "confirmPassword" })}
                                                type="password"
                                                id="register-confirmPassword"
                                                name="confirmPassword"
                                                error={<ErrorMessage name="confirmPassword" />}
                                                as="field"
                                                required
                                            />
                                        </div>

                                    </div>

                                    <SelectField
                                        title={<FormattedMessage id="category" />}
                                        placeholder={intl.formatMessage({ id: "category" })}
                                        name="department_id"
                                        options={departmentsOptions}
                                        className="label-fit w-full"
                                        id={"department_id"}
                                        type="select"
                                        error={formErr?.department_id || <ErrorMessage name="department_id" />}
                                    />

                                    <input
                                        id='file'
                                        name='file'
                                        className='my-2'
                                        type='file'
                                        onChange={(e) => setFieldValue("file", e.target.files[0])}
                                    />


                                    <div className='my-2'>

                                        <CheckboxField
                                            label={<FormattedMessage id="termsAndConditions" />}
                                            id={`register-agree_terms`}
                                            name="agree_terms"
                                        />

                                        <Error><ErrorMessage name="agree_terms" /></Error>

                                    </div>

                                    <div className='flex items-center justify-between my-3'>
                                        <input
                                            className={`bg-red-500 text-white cursor-pointer p-2 px-5 rounded-2xl ${loading ? 'hidden' : ''}`}
                                            type="submit"
                                            value={intl.formatMessage({ id: 'create' })}
                                        />
                                        {loading && (
                                            <div><Loading sm /></div>
                                        )}
                                        <Link to={"/login"}><FormattedMessage id='login' /></Link>
                                    </div>

                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    )
}
