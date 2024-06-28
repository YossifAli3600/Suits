import React, { useState } from 'react'
import './Register.css'
import lawyerImg from '../../assets/images/lawyerImg.png'
import { ErrorMessage, Form, Formik } from 'formik'
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
import { registerSchema } from '../../schemas/registerSchema';
import { Error } from '../../components/Error/Error';
import Button from '../../components/Button/Button';

export const Register = () => {
    const axios = useAxios();
    const setAuthData = useStore((state) => state.setAuthData);
    const { handleMutationErr } = useFormErr();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const initialValues = {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        agree_terms: "",
    };
    const handleRegister = useMutation({
        mutationFn: registerApi,
        onSuccess: (data) => {
            setAuthData(data.data.data);
            toast.success(data.data.message);
            navigate("/");
            setLoading(false);
        },
        onError: (error) => {
            handleMutationErr(error);
            setLoading(false);
        },
    });

    function registerApi(data) {
        return axios.post(`/user/register`, data);
    }

    const intl = useIntl();

    return (
        <div className='my-5'>
            <div className='items-stretch content-center LoginPage m-auto rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>
                <div className='md:order-1  order-2 ltr:order-3 bg-white dark:bg-slate-500 shadow-lg formDiv'>
                    <div className="h-full flex items-center content-center p-8 dark:text-white">
                        <Formik
                            validationSchema={registerSchema}
                            initialValues={initialValues}
                            onSubmit={(values) => {
                                values.agree_terms = values.agree_terms == true ? 1 : 2
                                handleRegister.mutate(values)
                                setLoading(true)
                            }
                            }>

                            <Form>
                                <h3 className='text-center mb-5 text-2xl'><FormattedMessage id='createNewAccount' /></h3>

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

                                <div className="flex items-center justify-center mb-3">
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

                                <div className="flex items-center justify-center mb-3">
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

                                <div className="flex items-center justify-center mb-3">
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

                                <div>
                                    <div className="flex mb-2">
                                        <CheckboxField
                                            id={`register-agree_terms`}
                                            name="agree_terms"
                                        />
                                        <Link to={"/terms-and-condtions"} className='text-sky-400'><FormattedMessage id="termsAndConditions" /></Link>
                                    </div>
                                    <Error className={"h-[20px]"}><ErrorMessage name="agree_terms" /></Error>
                                </div>

                                <div className='flex items-center justify-between my-3'>
                                    <Button isLoading={handleRegister.isLoading} type={"submit"} bg={"bg-red-500 text-white"}><FormattedMessage id='create' /></Button>

                                    <Link to={"/login"}><FormattedMessage id='login' /></Link>
                                </div>

                            </Form>

                        </Formik>
                    </div>
                </div>

                <div className='Loginillustrator order-1 z-10'>
                    <div className="h-full relative">
                        <img src={lawyerImg} alt="lawyerImg" className='w-full h-full absolute object-cover' />
                        <svg className='w-full h-full hidden md:block bg-white dark:bg-slate-500' preserveAspectRatio="none" viewBox="0 1 626 827" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M528.2 0.958191L515.153 18.1665C501.98 35.3749 475.887 69.7915 487.413 104.208C499.067 138.625 548.467 173.042 574.813 207.458C601.287 241.875 604.58 276.292 594.067 310.708C583.553 345.125 558.98 379.542 567.087 413.958C575.067 448.375 615.6 482.792 623.833 517.208C632.067 551.625 608 586.042 600.147 620.458C592.42 654.875 600.78 689.292 598.5 723.708C596.22 758.125 583.047 792.542 576.587 809.75L570 826.958H0V809.75C0 792.542 0 758.125 0 723.708C0 689.292 0 654.875 0 620.458C0 586.042 0 551.625 0 517.208C0 482.792 0 448.375 0 413.958C0 379.542 0 345.125 0 310.708C0 276.292 0 241.875 0 207.458C0 173.042 0 138.625 0 104.208C0 69.7915 0 35.3749 0 18.1665V0.958191H528.2Z" fill="#EE1A30" fillRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    )
}
