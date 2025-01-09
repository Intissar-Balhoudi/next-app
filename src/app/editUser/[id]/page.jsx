"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
const EditUser = ({ params }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const redirect = useRouter()
    const showApi = async () => {
        await axios.get(`/api/User/${params.id}`)
            .then((res) => {
                console.log(res.data.user)
                reset(res.data.user)
            }).catch((err) => {
                console.log(err)
            })

    }
    useEffect(() => {
        showApi()
    }, [])

    const update = async (data) => {
        await axios.put(`/api/User/${params.id}`,data)
        .then((res)=>{
            alert("update your data")
            redirect.push('/viewUser');
        })
        .catch((err)=>{

        })
    }
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <form action="" method="post" onSubmit={handleSubmit(update)}>
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
                         <button className='btn btn-warning'>Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUser