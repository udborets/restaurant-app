import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./ContactUsFormInput.module.scss";

export interface ContactUsFormInputProps {
  labelFor: string;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  text: string;
  isRequiredText?: string;
  Tag: "textarea" | "input";
  updateIsMessageSent: () => void;
}

const ContactUsFormInput = ({ labelFor, register, error, text, isRequiredText, Tag, updateIsMessageSent }: ContactUsFormInputProps) => {
  return (
    <label htmlFor={labelFor} className='contactUsFromInput flex flex-col w-full gap-2 h-fit'>
      <span
        className={`contactUsFormInput__fieldName text-[1.2rem] sm:text-[1.5rem] relative ${isRequiredText ? styles.required : ""} w-full text-left h-fit text-white`}
      >
        {text}
      </span>
      <Tag
        {...register(labelFor, {
          required: isRequiredText ?? false,
          pattern: {
            value: labelFor === "email" ? /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/i : /[^]/i,
            message: "Pass correct Email"
          },
          validate: (state: string) => {
            if (state.replaceAll(' ', '').length === 0)
              return isRequiredText;
            return true;
          }
        })}
        name={labelFor}
        onChange={updateIsMessageSent}
        className={`contactUsFormInput__input focus:outline rounded-[8px] focus:outline-2 text-[1rem] sm:text-[1.2rem] max-h-[150px]
        bg-slate-200 focus:bg-white outline-white outline-offset-2 w-full py-1 px-2 min-h-[50px]`}
      />
      <div
        className='contactUsFormInput__errorMessage min-h-[1.65rem] text-[1rem] sm:text-[1.1rem] text-red-500 w-full grid content-center'
      >
        {error[labelFor]?.message?.toString()}
      </div>
    </label>
  )
}

export default ContactUsFormInput