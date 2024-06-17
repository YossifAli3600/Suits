import { Field } from 'formik'
import React from 'react'
import { RequiredIndicator } from '../../RequiredIndicator/RequiredIndicator';
import styles from '../Inputs.module.css'
import { Error } from '../../Error/Error';
export const TextInput = ({ label, icon, placeholder, id, type, name, error, backError, className, row, disabled, required, onChange, onBlur, readOnly, value, as, }) => {
    return (
        <div className={`flex flex-col ${row ? "md:flex md:items-center gap-3 " : " flex-col gap-2"} w-full ${className}  `}>
            <div className="flex items-center gap-2">
                {icon ? icon : ""}
                <div>
                    <label className='modal__label m-0 dark:text-white' htmlFor={id}>{label} {row ? ":" : ""}</label>{" "}
                    {required ? <RequiredIndicator /> : ""}
                </div>
            </div>

            <div className='w-full'>
                {as == "field" ? (
                    <TextField
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        value={value}
                        disabled={disabled}
                        onChange={onChange}
                        readOnly={readOnly}
                    />
                ) : (
                    <TextInp
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        id={id}
                        disabled={disabled}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        readOnly={readOnly}
                    />
                )}
                {<Error>{backError || error}</Error>}
            </div>
        </div>
    )
}

function TextField({ type, placeholder, name, id, disabled, onChange, readOnly, value }) {
    let otherProps = {};
    if (onChange) otherProps = { onChange }
    return (
        <Field
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            value={value}
            className={`${styles.input}  w-full mb-1 dark:bg-slate-400 placeholder:dark:text-white dark:text-white`}
            disabled={disabled}
            readOnly={readOnly}
            {...otherProps}
        />
    );
}

function TextInp({ type, placeholder, name, id, disabled, onChange, onBlur, value, readOnly }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            className={`${styles.input} ${styles["text-box"]} w-full mb-1`}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            readOnly={readOnly}
        />
    );
}