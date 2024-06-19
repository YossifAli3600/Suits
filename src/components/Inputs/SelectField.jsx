import Select from "react-select";
import styles from "./Inputs.module.css";
import { Field } from "formik";
import { RequiredIndicator } from "../RequiredIndicator/RequiredIndicator";
import { Error } from "../Error/Error";
import React from 'react';

export default function SelectField({
  options,
  name,
  error,
  backError,
  className,
  row,
  placeholder,
  title,
  additionalFunc,
  id,
  required,
  isMulti,
  isClearable,
}) {
  return (
    <div
      className={`flex w-full flex-col ${row ? "md:flex-row md:items-center gap-3" : "flex-col gap-2"
        } ${className ? className : ""}`}
    >
      <div className="flex gap-2">
        <label htmlFor={id} className="modal__label dark:text-white">
          {title} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredIndicator /> : ""}
      </div>
      <div className="w-full h-full">
        <Field
          name={name}
          id={name}
          component={SelectInp}
          options={options}
          className={`${styles.select} select mb-1 rounded-2`}
          placeholder={placeholder}
          isMulti={isMulti}
          isClearable={isClearable}
        />
        {<Error>{backError || error}</Error>}
      </div>
    </div>
  );
}

const SelectInp = ({
  field,
  form,
  options,
  className,
  additionalFunc,
  placeholder = "Select",
  isMulti,
  isClearable,
}) => {
  function handleSelectChange(value) {
    if (isMulti) {
      form.setFieldValue(field.name, value);
    } else {
      form.setFieldValue(field.name, value.value);
    }
    if (additionalFunc) {
      additionalFunc();
    }
  }
  let theme = localStorage.getItem("theme") ?? "light"

  return (
    <Select
      options={options}
      name={field.name}
      value={
        isMulti
          ? field.value
          : options.find((option) => option.value == field.value)
      }
      className={`${className} rounded-2 option`}
      onChange={handleSelectChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
      isMulti={isMulti}
      isClearable={isClearable}
      styles={{
        singleValue: (provided, state) => ({
          ...provided,
          color: theme == "dark" ? "#fff" : "#000",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? theme == "dark" ? "#64748B" : "#33AAEE" : theme == "dark" ? "#64748B" : "#fff",
          '&:hover': {
            backgroundColor: theme == "dark" ? "#59687c" : "#33AAEE",
          },
        }),
        valueContainer: (base) => ({
          ...base,
          overflowX: "auto",
          flexWrap: "unset",
        }),
        multiValue: (base) => ({
          ...base,
          minWidth: "fit-content",
        }),
      }}
    />
  );
};