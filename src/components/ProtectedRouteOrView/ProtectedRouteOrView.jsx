import React, { useEffect, useState } from 'react';
import { useStore } from '../../zustand/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

export const ProtectedRouteOrView = ({ type, role, children, auth }) => {
    const navigate = useNavigate();
    const authData = useStore((state) => state.authData);
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (auth) {
            if (!authData) {
                navigate("/login");
                toast.error(<FormattedMessage id="loginFirst" />);
            } else {
                setContent(children);
            }
        } else {
            if (authData && authData.type === role) {
                setContent(children);
            } else {
                if (type === "route") {
                    navigate("/");
                    toast.error(<FormattedMessage id="unAuthorized" />);
                } else if (type === "view") {
                    setContent(null);
                    toast.error(<FormattedMessage id="unAuthorized" />);
                }
            }
        }
    }, [auth, authData, navigate, role, type, children]);

    return <>{content}</>;
};
