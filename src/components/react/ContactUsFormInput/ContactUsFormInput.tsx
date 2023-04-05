import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ContactUsFormInputProps {
  labelFor: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  text: string;
}

const ContactUsFormInput = ({ labelFor, register, error, text }: ContactUsFormInputProps) => {
  return (
    <label htmlFor={labelFor} className='flex flex-col w-[200px] h-[90px]'>
      <span
        className="w-full text-left h-1/3"
      >
        {text}
      </span>
      <input
        {...register(labelFor, {
          required: "This field can't be empty"
        })}
        name={labelFor}
        className={`outline outline-1 focus:outline-2 focus:outline-black focus:shadow-sm w-full h-1/3 py-1 px-2`}
      />
      {error[labelFor]?.message
        ? <div
          className='h-1/3 text-red-500 w-full grid content-center'
        >
          {error[labelFor]?.message?.toString()}
        </div>
        : ""}
    </label>
  )
}

export default ContactUsFormInput