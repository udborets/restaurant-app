import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./ContactUsFormInput.module.scss";

export interface ContactUsFormInputProps {
  labelFor: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  text: string;
  isRequiredText?: string;
}

const ContactUsFormInput = ({ labelFor, register, error, text, isRequiredText }: ContactUsFormInputProps) => {
  return (
    <label htmlFor={labelFor} className='contactUsFromInput flex flex-col w-full h-[90px]'>
      <span
        className={`contactUsFormInput__fieldName relative text-xl ${isRequiredText ? styles.required : ""} w-full text-left h-1/3 text-white`}
      >
        {text}
      </span>
      <input
        {...register(labelFor, {
          required: isRequiredText ?? false
        })}
        name={labelFor}
        className={`contactUsFormInput__input focus:outline rounded-[8px] focus:outline-2 
        bg-slate-200 focus:bg-white outline-white outline-offset-2 w-full h-1/3 py-1 px-2`}
      />
      {error[labelFor]?.message
        ? <div
          className='contactUsFormInput__errorMessage h-1/3 text-red-500 w-full grid content-center'
        >
          {error[labelFor]?.message?.toString()}
        </div>
        : ""}
    </label>
  )
}

export default ContactUsFormInput