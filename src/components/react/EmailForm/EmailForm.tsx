import { useForm } from "react-hook-form"
import { useState } from 'react';

import EmailFormInput from "@/components/react/EmailFormInput/EmailFormInput";

const EmailForm = () => {
  const isSent = useState<boolean>(false);
  const { register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  function onSubmit() {
    reset();
  }
  return (
    <div className="emailForm">
      <form
        action="emailForm__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailFormInput
          labelFor="firstName"
          register={register}
          error={errors}
          text={'First name'}
        />
        <input type="submit" value="Send message!" />
      </form>
    </div>
  )
}

export default EmailForm