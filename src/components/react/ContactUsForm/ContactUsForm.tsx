import { useForm } from "react-hook-form"
import { useState } from 'react';

import ContactUsFormInput from "@/components/react/ContactUsFormInput/ContactUsFormInput";

const ContactUsForm = () => {
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
    <div className="contactUsForm">
      <form
        action="contactUsForm__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContactUsFormInput
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

export default ContactUsForm