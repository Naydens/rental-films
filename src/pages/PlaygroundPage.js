import {useForm } from 'react-hook-form';

export default function PlaygroundPage() {
  const { register, handleSubmit, errors } = useForm();

  console.log(errors);

  function onSubmit(data) {
    console.log(data);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register({
        required: {
          value: true,
          message: "Поле обязательно"
        },
        minLength: {
          value: 3,
          message: 'Имя должно быть не меньше 3х символов'
        }
      })} /><br />
      <div style={{color: 'red'}}>{errors.name && errors.name.message}</div>
      <input name="lastname" ref={register} /><br />
      <button>Send</button>
    </form>
  );
}
