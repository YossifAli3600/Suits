import React from 'react'
import { useStore } from '../../zustand/store';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const ProtectedRoute = ({ role }) => {
    const navigate = useNavigate()
    const authData = useStore((state) => state.authData);
    if (authData) {
        navigate("/")
        toast.success(<FormattedMessage id="unAuthorized" />)
    } else {
        content = children
    }
    return (
        <>
            {content}
        </>
    )
}
