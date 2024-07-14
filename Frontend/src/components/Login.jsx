import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);



  return (
   <>
   <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    
  <button className="btn btn-sm btn-circle border-white absolute right-2 top-2"  onClick={()=>{ document.getElementById("my_modal_3").close()}}>✕</button>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}

   
    <h3 className="font-bold text-lg">Login !</h3>
    <div className="container w-100 mt-4">
        <div className='flex flex-col'>
            <span>Email <span className='text-red-700'>*</span></span>
            <input type='text' className='p-3 rounded-md' placeholder='Enter your Email' {...register("email", { required: true })}/>
            {errors.email && <span className='text-red-600'>This field is required</span>}
        </div>
        <div className='flex flex-col mt-5'>
            <span>Password <span className='text-red-700'>*</span></span>
            <input type='password' className='p-3 rounded-md' placeholder='Enter your Password' {...register("password", { required: true })}/>
            {errors.password && <span className='text-red-600'>This field is required</span>}
        </div>   
        <div className="flex justify-between mt-3">
        <button className='btn btn-sm px-3 py-1 rounded-md bg-pink-500 text-white'>Login</button>
        <span>Not Registered ? <Link to={"/signup"}><span className='underline text-pink-500'>Sign Up</span></Link> </span>
        </div>     
    </div>
    </form>  
  </div>
</dialog>
   </>
  )
}

export default Login