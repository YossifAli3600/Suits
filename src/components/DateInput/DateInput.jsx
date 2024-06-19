
import DatePicker from "../../features/components/DatePicker/DatePicker";
import { Error } from "../Error/Error";
import React from 'react';

export default function DateInput({
  date,
  setDate,
  initialValue,
  id,
  type,
  minDate,
  className,
  label,
  error,
  row,
}) {
  return (
    <div
      className={`inp-group text-inp flex gap-2 ${row ? "items-center" : "flex-col"
        } w-full ${className}`}
    >
      <label className="modal__label dark:text-white">
        {label} {row ? ":" : ""}
      </label>
      <div className="w-full">
        <DatePicker
          date={date}
          setDate={setDate}
          initialValue={initialValue}
          id={id}
          type={type}
          minDate={minDate}
        />
        {error && <Error>{error}</Error>}
      </div>
    </div>
  );
}
