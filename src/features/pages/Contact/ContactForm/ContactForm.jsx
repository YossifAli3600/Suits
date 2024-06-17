import { ErrorMessage, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import Button from "../../../../components/Button/Button";
import { toast } from "react-toastify";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TextInput } from "../../../../components/Inputs/TextInput/TextInput";
import TextboxInput from "../../../../components/Inputs/TextboxInput";
import { useMutation } from "react-query";
import useAxios from "../../../../hooks/useAxios";
import { contactSchema } from "../../../../schemas/contactSchema";

export default function ContactForm() {
  const form = useRef();
  const axios = useAxios();
  const intl = useIntl();
  const handleContact = useMutation({
    mutationFn: contactApi,
    onSuccess: (data) => {
      toast.success(data.data.message);
      form.current.resetForm();
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  function contactApi(data) {
    return axios.post("add", data);
  }

  return (
    <div className={`p-5 border rounded-2xl dark:bg-slate-500`}>
      <h3 className="fw-bold text-2xl text--primary text-center mb-4 capitalize">
        <FormattedMessage id="contact" />
      </h3>
      <Formik
        innerRef={form}
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        enableReinitialize
        onSubmit={(values) => handleContact.mutate(values)}
        validationSchema={contactSchema}
      >
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
            <div className="mb-4">
              <TextInput
                label={<FormattedMessage id="fullName" />}
                placeholder={intl.formatMessage({ id: "enterYourFullName" })}
                type="text"
                id="contact-name-inp"
                name="name"
                error={<ErrorMessage name="name" />}
                as="field"
              />
            </div>
            <div className="mb-4">
              <TextInput
                label={<FormattedMessage id="email" />}
                placeholder={intl.formatMessage({ id: "enterYourEmail" })}
                type="text"
                id="contact-email-inp"
                name="email"
                error={<ErrorMessage name="email" />}
                as="field"
              />
            </div>
          </div>
          <div className="mb-4">
            <TextInput
              label={<FormattedMessage id="phone" />}
              placeholder={intl.formatMessage({ id: "enterYourPhone" })}
              type="text"
              id="contact-phone-inp"
              name="phone"
              error={<ErrorMessage name="phone" />}
              as="field"
            />
          </div>
          <div className="mb-4">
            <TextboxInput
              label={<FormattedMessage id="message" />}
              placeholder={intl.formatMessage({ id: "enterYourMessage" })}
              type="text"
              id="contact-message-inp"
              name="message"
              error={<ErrorMessage name="message" />}
              as="field"
            />
          </div>
          <Button type="submit" className={"w-full"} isLoading={handleContact.isPending}>
            <FormattedMessage id="send" />
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
