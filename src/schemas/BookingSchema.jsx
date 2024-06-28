import { FormattedMessage } from "react-intl";
import * as yup from "yup";
import React from 'react';

export const BookingSchema = yup.object().shape({
    metting_date: yup.mixed().required(<FormattedMessage id="dateReq" />),
})