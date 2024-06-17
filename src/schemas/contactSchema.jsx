import { FormattedMessage } from "react-intl";
import * as yup from "yup";

export const contactSchema = yup.object().shape({
    name: yup.string().required(<FormattedMessage id="nameReq" />),
    email: yup
        .string()
        .email(<FormattedMessage id="emailMustBeValid" />)
        .required(<FormattedMessage id="emailReq" />),
    phone: yup
        .number()
        .typeError(<FormattedMessage id="phoneMustBeValid" />)
        .required(<FormattedMessage id="phoneReq" />)
        .min(0, <FormattedMessage id="minimumZero" />),
    message: yup
        .string()
        .required(<FormattedMessage id="messageReq" />),
})