import React from "react";
import { useForm } from "react-hook-form";

function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
const form = useForm();
const { register, handleSubmit, formState, getValues } = form;


  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
    <div className="container">

    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group flex-nowrap m-1" >
          <label htmlFor="firstName">First Name</label>
          <span className="input-group-text text-danger" id="addon-wrapping">
            {formState.errors.FirstName?.message}
          </span>
          <input
            className="form-control"
            aria-label="FirstName"
            aria-describedby="addon-wrapping"
            {...register("firstName", {
              required: { value: true, message: "First name is required" },
              maxLength: 30,
              minLength: 3,
              pattern: /^[a-zA-Z]+$/,
            })}
          />
        </div>

        <div class="input-group flex-nowrap m-1">
          <label htmlFor="lastName">Last Name</label>
          <span className="input-group-text  text-danger" id="addon-wrapping">
          
            {formState.errors.LastName?.message}
          </span>
          <input
            className="form-control"
            aria-label="Last Name"
            aria-describedby="addon-wrapping"
            {...register("lastName", {
              maxLength: 30,
              minLength: 3,
              pattern: /^[a-zA-Z]+$/,
              required: { value: true, message: "Last name is required" },
            })}
          />
          <br />
        </div>
        <div className="input-group flex-nowrap m-1">
          <span className="input-group-text text-danger" id="addon-wrapping">
     
            {formState.errors.Age?.message}
          </span>
          <label htmlFor="age">Age</label>
          <br />
          <input
            className="form-control"
            aria-label="Age"
            aria-describedby="addon-wrapping"
            {...register("age", {
              pattern: /\d+/,
              required: { value: true, message: "Age is required" },
            })}
          />
        </div>

        <div className="input-group flex-nowrap m-1">
          <label htmlFor="email">Email</label>
          <input
           className="form-control"
           aria-label="FirstName"
           aria-describedby="addon-wrapping"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: /^\S+@\S+$/i,
            })}
          />

          <span>{formState.errors.email?.message}</span>
        </div>

        <div className="input-group flex-nowrap m-1">
          <label htmlFor="password">password</label>
          <br />
          <input  className="form-control"
            aria-label="FirstName"
            aria-describedby="addon-wrapping"
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              minLength: 8,
            })}
          />
                    <span>{formState.errors.password?.message}</span>

        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div></div>

      </div>
    </>
  );
}

export default Form;
