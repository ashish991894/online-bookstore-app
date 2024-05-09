import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
	const onSubmit = (data) => console.log(data);
	return (
		<>
		<div  className='flex h-screen items-center justify-center'>
			<div className=" w-[700px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>

		<div className='mt-4 space-y-2'>
			<span>Name</span>
			<br/>
			<input type='text' placeholder='Enter your Fullname' className='w-80 px-4 py-2 border rounded-md '
			{...register("name", { required: true })}/>
			 <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
		</div>

		{/*Email*/}
		<div className='mt-4 space-y-2'>
			<span>Email</span>
			<br/>
			<input type='email' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md '
			 {...register("email", { required: true })} />
			  <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
		</div>

		{/*password*/}
		<div className='mt-4 space-y-2'>
			<span>Password</span>
			<br/>
			<input type='text' placeholder='Enter your Password' className='w-80 px-3 py-1 border rounded-md '
			 {...register("password", { required: true })} />
			  <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
		</div>

		{/*Button*/}
		<div className='flex justify-around mt-4'>
			<button className='bg-green-500 text-white rounded-md px-4 py-1 hover:bg-green-800 duration-200'>Signup</button>
			<p className='text-xl'>Have Account?{" "} 
			<button className='underline text-blue-500 cursor-pointer'
			onClick={()=>
			document.getElementById("my_modal_3").showModal()
			}
			>Login
			</button>{" "}
			<Login/>
			</p>
		</div>
   </form>
  </div>
</div>
</div>
		</>
	)
}

export default Signup