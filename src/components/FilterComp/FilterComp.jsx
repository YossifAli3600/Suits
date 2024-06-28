import { Field, Form, Formik } from "formik";
import { useLayoutEffect, useRef } from "react";
import { useStore } from "../../zustand/store";
import Button from "../Button/Button";
import { FormattedMessage } from "react-intl";
import SelectField from "../Inputs/SelectField";
import { useCategoriesData } from "../../queries/queries";
import { useSelectOptions } from "../../hooks/useSelectOptions";

export default function FilterComp({ isLoading, name, placeholder, placeholder2 }) {
  const editFilters = useStore((state) => state.editFilters);
  const filterName = name;
  const form = useRef();

  const { data: categories } = useCategoriesData();
  const departmentsOptions = useSelectOptions({ data: categories, valueKey: 'department_id', labelKey: 'name' });

  useLayoutEffect(() => {
    editFilters(filterName, {});
  }, [editFilters]);

  return (
    <div className="mb-4">
      <Formik
        innerRef={form}
        initialValues={{
          searchKey: "",
        }}
        enableReinitialize
        onSubmit={(values) => {
          editFilters(filterName, values);
        }}
      >
        <Form className="flex items-center gap-5 mb-8">
          <div>
            <Field
              className="border border-black/50 rounded-md p-[10px] mt-2"
              placeholder={placeholder}
              id={`${name}-search`}
              name="search"
            />
          </div>
          <SelectField
            placeholder={placeholder2}
            name="department_id"
            options={departmentsOptions}
            className="label-fit"
            id={"department_id"}
            type="select"
          />
          <div className="flex gap-3 mt-2 ">
            <Button type="submit" isLoading={isLoading}>
              <FormattedMessage id="filter" />
            </Button>
            <Button
              onClick={() => {
                form.current.resetForm();
                editFilters(filterName, {});
              }}
            >
              <FormattedMessage id="resetFilter" />
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
