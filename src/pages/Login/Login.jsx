import React, { useEffect, useState } from 'react'
import './Login.css'
import Loginillustrator from '../../assets/images/Loginillustrator.png'
import { Formik } from 'formik'
// import { LoginSchema } from '../../../Schemas/LoginSchema'
// import { LoginAuth } from '../../../Axios/Services/Login'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useMutation } from '@tanstack/react-query';
import { useStore } from '../../zustand/store';
import useAxios from '../../hooks/useAxios';
import useFormErr from '../../hooks/useFormErr';
// import { useRecoilState } from 'recoil'
// import { AuthState } from '../../../Atoms/AuthAtom'

export const Login = () => {
    const axios = useAxios();
    const setAuthData = useStore((state) => state.setAuthData);
    const { formErr, handleMutationErr } = useFormErr();
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const initialValues = {
        email: "",
        password: "",
    };
    const handleLogin = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            setAuthData(data.data.data);
            toast.success(data.data.msg);
            navigate("/")
        },
        onError: handleMutationErr,
    });

    function loginApi(data) {
        console.log(data)
        return axios.post(`/user/login`, data);
    }
    // let handleLogins = async (values) => {
    //     setloading(true);
    //     const res = await LoginAuth(values);
    //     if (res.response && res.response.status === 200) {
    //         let token = res.response.data.data.token;
    //         let newData = {
    //             auth: true,
    //             data: {
    //                 token: token,
    //             },
    //         }
    //         setAuthData(newData);
    //         localStorage.setItem("AuthData", JSON.stringify(newData));
    //         toast.success(`${res.response.data.message}`, {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //         if (redirect) {
    //             navigate(`/${redirect}`)
    //         } else {
    //             navigate('/');
    //         }
    //     }
    //     else {
    //         toast.error(`${res.data.message}`, {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //         setloading(false);
    //     }
    // }


    return (
        <div className='my-5'>
            <div className='items-stretch content-center LoginPage m-auto rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>
                <div className='md:order-1  order-2 bg-white shadow-lg formDiv'>
                    <div className="h-full flex items-center content-center p-8">
                        <Formik
                            // validationSchema={LoginSchema}
                            initialValues={initialValues}
                            onSubmit={(values) => handleLogin.mutate(values)}>{
                                ({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleSubmit,
                                    handleBlur,
                                }) => {
                                    return (
                                        <form onSubmit={handleSubmit} className='w-75' action="" method='POST'>
                                            <h3 className='text-center mb-5 text-2xl'>تسجيل الدخول</h3>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-0 bg-white" id="basic-addon1"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 2.45819C7.40111 2.45819 7.30444 2.48752 7.22221 2.54246C7.13999 2.5974 7.0759 2.67549 7.03806 2.76685C7.00022 2.85821 6.99031 2.95875 7.00961 3.05574C7.0289 3.15273 7.07652 3.24182 7.14645 3.31174C7.21637 3.38167 7.30546 3.42929 7.40245 3.44858C7.49944 3.46788 7.59998 3.45797 7.69134 3.42013C7.7827 3.38229 7.86079 3.3182 7.91574 3.23598C7.97068 3.15375 8 3.05708 8 2.95819C8 2.82558 7.94732 2.69841 7.85355 2.60464C7.75979 2.51087 7.63261 2.45819 7.5 2.45819ZM12.5 0.958191H2.5C1.83696 0.958191 1.20107 1.22158 0.732233 1.69042C0.263392 2.15926 0 2.79515 0 3.45819V22.4582C0 22.7865 0.0646642 23.1116 0.190301 23.4149C0.315938 23.7182 0.500087 23.9938 0.732233 24.226C0.964379 24.4581 1.23998 24.6423 1.54329 24.7679C1.84661 24.8935 2.1717 24.9582 2.5 24.9582H12.5C12.8283 24.9582 13.1534 24.8935 13.4567 24.7679C13.76 24.6423 14.0356 24.4581 14.2678 24.226C14.4999 23.9938 14.6841 23.7182 14.8097 23.4149C14.9353 23.1116 15 22.7865 15 22.4582V3.45819C15 2.79515 14.7366 2.15926 14.2678 1.69042C13.7989 1.22158 13.163 0.958191 12.5 0.958191ZM14 22.4582C14 22.856 13.842 23.2375 13.5607 23.5189C13.2794 23.8002 12.8978 23.9582 12.5 23.9582H2.5C2.10218 23.9582 1.72064 23.8002 1.43934 23.5189C1.15804 23.2375 1 22.856 1 22.4582V18.9582H14V22.4582ZM14 17.9582H1V4.95819H14V17.9582ZM14 3.95819H1V3.45819C1 3.06037 1.15804 2.67884 1.43934 2.39753C1.72064 2.11623 2.10218 1.95819 2.5 1.95819H12.5C12.8978 1.95819 13.2794 2.11623 13.5607 2.39753C13.842 2.67884 14 3.06037 14 3.45819V3.95819ZM7.5 22.9582C7.79667 22.9582 8.08668 22.8702 8.33335 22.7054C8.58003 22.5406 8.77229 22.3063 8.88582 22.0322C8.99935 21.7581 9.02906 21.4565 8.97118 21.1656C8.9133 20.8746 8.77044 20.6073 8.56066 20.3975C8.35088 20.1878 8.08361 20.0449 7.79264 19.987C7.50166 19.9291 7.20006 19.9588 6.92597 20.0724C6.65189 20.1859 6.41762 20.3782 6.2528 20.6248C6.08797 20.8715 6 21.1615 6 21.4582C6 21.856 6.15804 22.2375 6.43934 22.5189C6.72064 22.8002 7.10218 22.9582 7.5 22.9582ZM7.5 20.9582C7.59889 20.9582 7.69556 20.9875 7.77779 21.0425C7.86001 21.0974 7.9241 21.1755 7.96194 21.2668C7.99978 21.3582 8.00969 21.4587 7.99039 21.5557C7.9711 21.6527 7.92348 21.7418 7.85355 21.8117C7.78363 21.8817 7.69454 21.9293 7.59755 21.9486C7.50056 21.9679 7.40002 21.958 7.30866 21.9201C7.2173 21.8823 7.13921 21.8182 7.08426 21.736C7.02932 21.6538 7 21.5571 7 21.4582C7 21.3256 7.05268 21.1984 7.14645 21.1046C7.24021 21.0109 7.36739 20.9582 7.5 20.9582Z" fill="#EE1A30" />
                                                    </svg>
                                                    </span>
                                                </div>
                                                <input type="text" className="w-full border-0 outline-none bg-transparent mt-3" value={values.phone}
                                                    onBlur={handleBlur} onChange={handleChange} name='email' placeholder="رقم الهاتف" aria-describedby="basic-addon1" />
                                            </div>
                                            {errors.phone &&
                                                touched.phone && (
                                                    <div className="text-danger mb-3">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text border-0 bg-white" id="basic-addon1"><svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 13.9582C9.74629 13.9546 9.49776 14.0444 9.28786 14.2155C9.07797 14.3866 8.91678 14.6307 8.82601 14.915C8.73523 15.1993 8.71921 15.5102 8.78012 15.8058C8.84102 16.1013 8.97592 16.3674 9.16666 16.5682V17.9582C9.16666 18.2234 9.25446 18.4778 9.41074 18.6653C9.56702 18.8528 9.77898 18.9582 10 18.9582C10.221 18.9582 10.433 18.8528 10.5893 18.6653C10.7455 18.4778 10.8333 18.2234 10.8333 17.9582V16.5682C11.0241 16.3674 11.159 16.1013 11.2199 15.8058C11.2808 15.5102 11.2648 15.1993 11.174 14.915C11.0832 14.6307 10.922 14.3866 10.7121 14.2155C10.5022 14.0444 10.2537 13.9546 10 13.9582ZM14.1667 9.95819V7.95819C14.1667 6.63211 13.7277 5.36034 12.9463 4.42266C12.1649 3.48498 11.1051 2.95819 10 2.95819C8.89493 2.95819 7.83512 3.48498 7.05372 4.42266C6.27232 5.36034 5.83333 6.63211 5.83333 7.95819V9.95819C5.17029 9.95819 4.5344 10.2743 4.06556 10.8369C3.59672 11.3995 3.33333 12.1625 3.33333 12.9582V19.9582C3.33333 20.7538 3.59672 21.5169 4.06556 22.0795C4.5344 22.6421 5.17029 22.9582 5.83333 22.9582H14.1667C14.8297 22.9582 15.4656 22.6421 15.9344 22.0795C16.4033 21.5169 16.6667 20.7538 16.6667 19.9582V12.9582C16.6667 12.1625 16.4033 11.3995 15.9344 10.8369C15.4656 10.2743 14.8297 9.95819 14.1667 9.95819ZM7.5 7.95819C7.5 7.16254 7.76339 6.39948 8.23223 5.83687C8.70107 5.27426 9.33695 4.95819 10 4.95819C10.663 4.95819 11.2989 5.27426 11.7678 5.83687C12.2366 6.39948 12.5 7.16254 12.5 7.95819V9.95819H7.5V7.95819ZM15 19.9582C15 20.2234 14.9122 20.4778 14.7559 20.6653C14.5996 20.8528 14.3877 20.9582 14.1667 20.9582H5.83333C5.61231 20.9582 5.40035 20.8528 5.24407 20.6653C5.08779 20.4778 5 20.2234 5 19.9582V12.9582C5 12.693 5.08779 12.4386 5.24407 12.2511C5.40035 12.0635 5.61231 11.9582 5.83333 11.9582H14.1667C14.3877 11.9582 14.5996 12.0635 14.7559 12.2511C14.9122 12.4386 15 12.693 15 12.9582V19.9582Z" fill="#EE1A30" />
                                                    </svg>
                                                    </span>
                                                </div>
                                                <input type="password" className="w-full border-0 outline-none bg-transparent mt-3" value={values.password}
                                                    onBlur={handleBlur} onChange={handleChange} name='password' placeholder="الرقم السري" aria-describedby="basic-addon1" />
                                            </div>
                                            {errors.password &&
                                                touched.password && (
                                                    <div className="text-danger mb-3">
                                                        {errors.password}
                                                    </div>
                                                )}
                                            <div className='flex items-center justify-between'>
                                                <input
                                                    className={`bg-red-500 text-white cursor-pointer p-2 rounded-2xl ${loading ? 'hidden' : ''}`}
                                                    type="submit"
                                                    value="تسجيل الدخول"
                                                />
                                                {loading && (
                                                    <div><Loading sm /></div>
                                                )}
                                                <Link to={"/Register"} className='text-dark'>انشاء حساب جديد</Link>
                                            </div>
                                        </form>
                                    )
                                }
                            }
                        </Formik>
                    </div>
                </div>
                <div className='Loginillustrator order-1 z-10'>
                    <div className="h-full relative">
                        <img src={Loginillustrator} alt="Loginillustrator" className='w-full h-full absolute' />
                        <svg className='w-full h-full hidden md:block bg-white' preserveAspectRatio="none" viewBox="0 0 626 827" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M528.2 0.958191L515.153 18.1665C501.98 35.3749 475.887 69.7915 487.413 104.208C499.067 138.625 548.467 173.042 574.813 207.458C601.287 241.875 604.58 276.292 594.067 310.708C583.553 345.125 558.98 379.542 567.087 413.958C575.067 448.375 615.6 482.792 623.833 517.208C632.067 551.625 608 586.042 600.147 620.458C592.42 654.875 600.78 689.292 598.5 723.708C596.22 758.125 583.047 792.542 576.587 809.75L570 826.958H0V809.75C0 792.542 0 758.125 0 723.708C0 689.292 0 654.875 0 620.458C0 586.042 0 551.625 0 517.208C0 482.792 0 448.375 0 413.958C0 379.542 0 345.125 0 310.708C0 276.292 0 241.875 0 207.458C0 173.042 0 138.625 0 104.208C0 69.7915 0 35.3749 0 18.1665V0.958191H528.2Z" fill="#EE1A30" fillRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
