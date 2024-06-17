import { FormattedMessage } from "react-intl";
import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required(<FormattedMessage id="nameReq" />),
    email: yup
        .string()
        .email(<FormattedMessage id="emailMustBeValid" />)
        .required(<FormattedMessage id="emailReq" />),
    password: yup
        .string()
        .required(<FormattedMessage id="passwordReq" />),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(<FormattedMessage id="confirmPasswordReq" />),
    phone: yup
        .number()
        .typeError(<FormattedMessage id="phoneMustBeValid" />)
        .required(<FormattedMessage id="phoneReq" />)
        .min(0, <FormattedMessage id="minimumZero" />),
    address: yup
        .string()
        .required(<FormattedMessage id="addressReq" />),
    agree_terms: yup.mixed().required(<FormattedMessage id="termsAgree" />).oneOf([1, true], <FormattedMessage id="termsAgree" />),
})