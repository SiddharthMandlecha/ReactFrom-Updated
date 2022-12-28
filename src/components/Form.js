import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form(porps) {

    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
              <div className="register">
                   <div className="col-1">
                      <h2>Sign In</h2>
                         <span>register and enjoy the service</span>

                            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                             <input type="text" {...register("username",{ required : true, maxLength: 15 })} placeholder='Username' />
                              {errors.username?.type === "required" && "Username is required"}
                              {errors.username?.type === "maxLength" && "Max Length Exceed"}

<br></br>

                              <input type="text" {...register("password",{ required : true, maxLength: 15 })} placeholder='Password' />
                              {errors.password?.type === "required" && "Password is required"}
                              {errors.password?.type === "maxLength" && "Max Length Exceed"}

<br></br>                   
                             
                             <input type="text" {...register("confirmpwd",{ required : true, maxLength: 15 })} placeholder='Confirm password' />
                             
                             {errors.confirmpwd?.type === "required" && "Confirm Password is required"}
                              {errors.confirmpwd?.type === "maxLength" && "Max Length Exceed"}
<br></br>
                                                          
                             <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Mobile Number' />
                             
                              {errors.mobile?.type === "required" && "Mobile Number is required"}
                              {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

                             <button className='btn'>Sign In</button>
                            </form>
                        </div>
                    <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
</section>
)
};