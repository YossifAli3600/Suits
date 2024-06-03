import { useState } from "react";
import { toast } from "react-toastify";

export default function useFormErr() {
  const [formErr, setFormErr] = useState({});

  function handleMutationErr(err) {
    if (err.response.status == 422) {
      setFormErr(err.response.data.data);
      toast.error(err.response.data.msg);
    } else {
      setFormErr({ general: err.response.data.msg });
      toast.error(err.response.data.msg);
    }
  }

  return { formErr, setFormErr, handleMutationErr };
}
