import { useForm } from "react-hook-form"
import { useState } from 'react';

import ContactUsFormInput from "@/components/react/ContactUsFormInput/ContactUsFormInput";

const ContactUsForm = () => {
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
    <div className="contactUsForm w-[300px]">
      <form
        action="submit"
        className="contactUsForm__form p-2 w-full h-full flex flex-col gap-2"
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
        <textarea
          className={'outline outline-1 focus:outline-2 focus:outline-black min-h-[100px] max-h-[200px] w-full'}
          {...register('messageText', {
            required: true,
          })}
        />
        <button type="submit">
          Send message!
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm