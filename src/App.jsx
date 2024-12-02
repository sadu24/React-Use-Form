import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>React use form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>}

        <br />

        <input
          {...register("email", {
            required: true,
            pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          })}
        />
        {errors.email && <p>Invalid email format</p>}

        <br />

        <input {...register("password", { required: true, minLength: 8 })} />
        {errors.password && <p>Password must be at least 8 characters long</p>}

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
