import { useForm } from "react-hook-form"

import ContactUsFormInput from "@/components/react/ContactUsFormInput/ContactUsFormInput";

export interface ContactUsFormProps {
  inputsProps: { text: string, labelFor: string, isRequiredText?: string }[];
}

const ContactUsForm = ({ inputsProps }: ContactUsFormProps) => {
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
    <div className="contactUsForm w-full sm:w-[500px]">
      <form
        action="submit"
        className="contactUsForm__form p-2 w-full h-full flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputsProps.map((inputProps) => (
          <ContactUsFormInput {...inputProps} error={errors} register={register} key={inputProps.labelFor} />
        ))}
        <textarea
          className={'outline outline-1 focus:outline-2 focus:outline-black min-h-[100px] max-h-[200px] w-full'}
          {...register('messageText', {
            required: 'This field cannot be empty',
          })}
        />
        {errors?.messageText?.message?.toString()}
        <button type="submit">
          Send message!
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm