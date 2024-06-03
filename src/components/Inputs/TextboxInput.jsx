import { Field } from "formik";
import styles from "./Inputs.module.css";
import { RequiredIndicator } from "../RequiredIndicator/RequiredIndicator";
import { Error } from "../Error/Error";

export default function TextboxInput({
  label,
  placeholder,
  id,
  name,
  backError,
  error,
  className,
  row,
  required,
  as,
  onChange,
  onBlur,
  value,
}) {
  return (
    <div
      className={`inp-group flex-col text-inp flex ${row ? " md:flex-row md:items-center gap-3" : "flex-col gap-2"
        } w-full ${className}`}
    >
      <div className="flex gap-2">
        <label className="m-0 modal__label" htmlFor={id}>
          {label} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredIndicator /> : ""}
      </div>
      <div className="w-full">
        {as == "field" ? (
          <TextBoxField placeholder={placeholder} name={name} id={id} />
        ) : (
          <TextBoxInp
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        <Error>{backError || error}</Error>
      </div>
    </div>
  );
}

function TextBoxField({ placeholder, name, id }) {
  return (
    <Field
      as="textarea"
      name={name}
      placeholder={placeholder}
      id={id}
      className={`${styles.input} ${styles["text-area"]} w-full`}
    />
  );
}



function TextBoxInp({
  placeholder,
  name,
  id,
  disabled,
  onChange,
  onBlur,
  value,
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      id={id}
      value={value || ""}
      className={`${styles.input} ${styles["text-box"]} w-full mb-1`}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
