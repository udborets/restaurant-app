import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface EmailFormInputProps {
  labelFor: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  text: string;
}

const EmailFormInput = ({ labelFor, register, error, text }: EmailFormInputProps) => {
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

export default EmailFormInput