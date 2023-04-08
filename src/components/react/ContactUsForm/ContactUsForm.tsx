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
    <div className="contactUsForm w-full sm:w-[500px] bg-black py-8 px-6 rounded-[15px]">
      <form
        action="submit"
        className="contactUsForm__form p-2 w-full h-full flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputsProps.map((inputProps) => (
          <ContactUsFormInput {...inputProps} error={errors} register={register} key={inputProps.labelFor} />
        ))}
        <button
          type="submit"
          className="contactUsForm__sendButton text-white px-4 py-3 bg-black outline-white outline outline-2 rounded-[8px] hover:bg-gray-900 transition-all duration-[.2s] ease-out"
        >
          Send message!
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm