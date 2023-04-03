import { useForm } from "react-hook-form"

const EmailForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  function onSubmit() {
    console.log('haha')
  }
  return (
    <div className="emailForm">
      <form
        action="emailForm__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="firstName">
          First name
          <input type="sumbit" value={'haha'} name="firstName" />
        </label>
        <label htmlFor="lastName" className='flex flex-col'>
          First name
          <input type="sumbit" value={'haha'} name="lastName" />
        </label>
      </form>
    </div>
  )
}

export default EmailForm