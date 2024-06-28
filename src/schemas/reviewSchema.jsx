import { FormattedMessage } from "react-intl";
import * as yup from "yup";
import React from 'react';

export const reviewSchema = yup.object().shape({
    review_comment: yup.string().required(<FormattedMessage id="commentReq" />),
})