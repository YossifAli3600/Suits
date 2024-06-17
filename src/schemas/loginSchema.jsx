import { FormattedMessage } from "react-intl";
import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email(<FormattedMessage id="emailMustBeValid" />)
        .required(<FormattedMessage id="emailReq" />),
    password: yup
        .string()
        .required(<FormattedMessage id="passwordReq" />),
})