import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });
  const onSubmit = data => console.log(data);
  console.log(errors);


  return (
    <div className="containter mt-5">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input type="text" placeholder="Name" {...register("name", { required: true })} />
          {errors.name && <span>Invalid input</span>}
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
          {errors.email && <span>Invalid email</span>}
        </div>
        <div className="mb-3">
          <textarea placeholder="Message" {...register("message", { required: true })} />
          {errors.message && <span>Invalid input</span>}
        </div>
        <button type="submit">Submit</button>
        {/* <button type="submit" onClick={() => reset()}>Submit</button> */}
      </form>
    </div>
  );
}
