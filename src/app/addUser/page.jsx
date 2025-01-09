"use client"
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
const AddUser = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const redirect = useRouter()
    const signup = async (data) => {
        await axios.post(`/api/User`, data)
            .then((res) => {
                reset()
                alert("data has been inserted")
                redirect.push('/viewUser')
            })
            .catch((err) => {
                console.log(err)
            })
    };
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow mt-5" style={{    marginTop: "17rem !important" }}>
                <form action="" method="post" onSubmit={handleSubmit(signup)}>
                    <div className="mt-4">
                        <input type="text" {...register('user_name')} placeholder='enter user name' className='form-control' />
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('user_email')} placeholder='enter email id' className='form-control' />
                    </div>
                    <div className="mt-4">
                        <input type="text" {...register('user_mobile')} placeholder='enter mobile number' className='form-control' />
                    </div>
                    <div className="mt-4">
                        <button className='btn btn-success'>submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddUser