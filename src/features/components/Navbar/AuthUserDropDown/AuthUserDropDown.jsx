import React from 'react'
import { useStore } from '../../../../zustand/store';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { QueryClient } from 'react-query';
import { toast } from 'react-toastify';
import useAxios from '../../../../hooks/useAxios';

export const AuthUserDropDown = () => {
    const axios = useAxios();
    const authData = useStore((state) => state.authData);
    const setAuthData = useStore((state) => state.setAuthData);

    const handleLogout = useMutation({
        mutationFn: logoutApi,
        onSuccess: (data) => {
            setAuthData("");
            toast.success(data.data.message);
            QueryClient.clear();
        },
        onError: (err) => {
            toast.error(err.response.data.message);
            if (err.response.status == 401) {
                setAuthData("");
                QueryClient.clear();
            }
        },
    });

    function logoutApi() {
        return axios.post(`logout`);
    }

    return (
        <div className='flex flex-col items-center gap-3'>
            <span className='dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='hello' />{" "} , {authData.name}</span>
            <Link to={"/profile/edit-profile"} className='dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='profile' /></Link>
            <span onClick={() => handleLogout.mutate()} className='cursor-pointer dark:text-white bg-slate-100 dark:bg-slate-700 rounded-lg w-full text-center'><FormattedMessage id='logout' /></span>
        </div>
    )
}
