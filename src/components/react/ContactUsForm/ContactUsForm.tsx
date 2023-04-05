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
  function onSubmit(e: any) {
    console.log(e)
    reset();
  }
  return (
    <div className="contactUsForm w-fit">
      <form
        action="submit"
        className="contactUsForm__form p-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContactUsFormInput
          labelFor="firstName"
          register={register}
          error={errors}
          text={'First name'}
        />
        <ContactUsFormInput
          labelFor="secondName"
          register={register}
          error={errors}
          text={'Second name'}
        />
        <ContactUsFormInput
          labelFor="email"
          register={register}
          error={errors}
          text={'Email'}
        />
        <button type="submit">
          Send message!
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm