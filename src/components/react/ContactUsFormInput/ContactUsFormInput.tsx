import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ContactUsFormInputProps {
  labelFor: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  text: string;
}

const ContactUsFormInput = ({ labelFor, register, error, text }: ContactUsFormInputProps) => {
  return (
    <label htmlFor={labelFor} className='flex flex-col'>
      <span>{text}</span>
      <input
        {...register(labelFor, {
          required: "This field can't be empty"
        })}
        name={labelFor}
      />
      {error[labelFor]?.message
        ? <div>{error[labelFor]?.message?.toString()}</div>
        : ""}
    </label>
  )
}

export default ContactUsFormInput