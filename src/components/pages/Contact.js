import React from 'react';
import { useForm } from 'react-hook-form';

// using react-hook-form to develop the contact form
// react-hook-form allows me to check validation without adding too much codes
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
    <div className="container mt-4">
      <div className='row p-3'>
        <h1 className='text-center col-12'>Contact Me</h1>
        <form className="text-center col-12 p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 col">
            <input className='form-control' type="text" placeholder="Name" {...register("name", { required: true })} />
            {errors.name && <span>Invalid input</span>}
          </div>
          <div className="mb-3 col">
            <input className='form-control' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
            {errors.email && <span>Invalid email</span>}
          </div>
          <div className="mb-3 col">
            <textarea className='form-control' placeholder="Message" {...register("message", { required: true })} />
            {errors.message && <span>Invalid input</span>}
          </div>
          <button className='btn btn-outline-dark' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
