import { FormattedMessage } from "react-intl";
import * as yup from "yup";
import React from 'react';

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email(<FormattedMessage id="emailMustBeValid" />)
        .required(<FormattedMessage id="emailReq" />),
    password: yup
        .string()
        .required(<FormattedMessage id="passwordReq" />),
})