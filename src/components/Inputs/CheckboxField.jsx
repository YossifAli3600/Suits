import { Field } from "formik";

export default function CheckboxField({ label, id, name, value, className }) {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <Field
        id={id}
        type="checkbox"
        value={value}
        name={name}
      />
      <label htmlFor={id} className="capitalize">{label}</label>
    </div>
  );
}
