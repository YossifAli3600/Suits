import { useMemo } from "react";

export const useSelectOptions = ({ data, valueKey, labelKey }) => {
    const options = useMemo(() => {
        if (!data) return [];
        return data.map((item) => ({
            value: item[valueKey],
            label: item[labelKey],
        }));
    }, [data]);
    return (options)
}
