import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="login">
      <div className="imgBx">
        <img
          className="foodImg"
          src="https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" action="">
            <div className="inputBx">
              <span>Name</span>
              <input placeholder="restaurant Name.." {...register("name")} />
              
            </div>
           
            <div className="inputBx">
              <span>Email</span>
              <input
               
                type="email"
                name="email"
                placeholder="name@gmail.com"
                {...register("email", { required: "email is required" })}
                
              />
              {errors.email && <span style={{color: '#e63946', fontSize: '14px'}}>Email is required</span>}
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="type your password"
                {...register("password", { required: "password is required" })}
              />
              {errors.password && <span style={{color: '#e63946', fontSize: '14px'}}>Password is required</span>}
            </div>
           
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign In" name="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
