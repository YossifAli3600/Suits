import React from 'react'
import { useStore } from '../../zustand/store';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const ProtectedRouteOrView = ({ type, role }) => {
    const navigate = useNavigate()
    const authData = useStore((state) => state.authData);
    console.log(authData.type)
    console.log(role)
    if (!authData.type == role) {
        type == "route" ? navigate("/") : type = "view" ? content = null : "";
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
