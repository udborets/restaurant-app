import { useForm } from "react-hook-form"

import ContactUsFormInput from "@/components/react/ContactUsFormInput/ContactUsFormInput";

export interface ContactUsFormProps {
  inputsProps: {
    text: string;
    labelFor: string;
    isRequiredText?: string;
    Tag: "textarea" | "input";
  }[];
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
    <div className="contactUsForm max-w-[600px] w-full bg-black py-8 px-6 rounded-[15px] relative">
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
          className={`contactUsForm__sendButton text-white px-4 py-3 
          bg-gray-800 outline-white outline-2 focus:outline active:outline-none outline-offset-2
          rounded-[8px] hover:bg-gray-900 transition-colors duration-[.2s] ease-out text-[1.2rem] font-bold my-[1rem]`}
        >
          Send message
        </button>
        <span className={`contactUsForm__requireHelpText absolute right-[20px] bottom-[20px] text-white`}>
          <span className={`contactUsForm__ text-red-600`}>*</span> - required fields
        </span>
      </form>
    </div>
  )
}

export default ContactUsForm