import { FormattedMessage } from "react-intl";
import * as yup from "yup";
import React from 'react';

export const lawerPaymentSchema = yup.object().shape({
    service: yup.mixed().required(<FormattedMessage id="durationReq" />),
})