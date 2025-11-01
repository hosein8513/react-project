import React, { useState } from 'react';
import { createUser, updateUser } from '../../services/users';
import { useLocation, useNavigate } from 'react-router';

const Adduser = () => {
    const navigate = useNavigate()
    const user =useLocation().state?.user
    const [data, setdata] = useState({
        name:user?.name|| "",
        email:user?.email|| "",
        phone:user?.phone|| "",
        website:user?.website|| ""
    })

    const handlechange = (e) => {
        const { name, value } = e.target
        setdata(prev => ({ ...prev, [name]: value }))
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        const res = await user?.id?await updateUser(user.id,data):await createUser(data)
        if (res.status === 201 ||res.status ===200) {
            alert("User Added Successfully!")
            setdata({ name: "", email: "", phone: "", website: "" })
            navigate(-1)
        }
    }
    return (
        <div className='flex flex-col gap-3 justify-center items-center bg-gray-300 w-full h-screen'>
            <h1 className='text-[30px] font-bold text-white'>{user?"EDIT USER":"ADD USER"}</h1>
            <div className='bg-white rounded-lg p-4 flex justify-center items-center w-7/12 h-8/12'>
                <form className='flex flex-col justify-center items-center gap-6 w-11/12' onSubmit={handlesubmit}>
                    <div>
                        <label className='text-[20px] font-semibold'>NAME</label>
                        <input type="text"
                            name='name'
                            id='name'
                            value={data.name}
                            onChange={handlechange}
                            className='w-11/12 h-[25px] rounded-lg bg-blue-300 text-center'
                            placeholder='Please Enter Your Name'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-semibold'>EMAIL</label>
                        <input type="email"
                            name='email'
                            id='email'
                            value={data.email}
                            onChange={handlechange}
                            className='w-11/12 h-[25px] rounded-lg bg-blue-300 text-center'
                            placeholder='Please Enter Your Email'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-semibold'>PHONE</label>
                        <input type="tel"
                            name='phone'
                            id='phone'
                            value={data.phone}
                            onChange={handlechange}
                            className='w-11/12 h-[25px] rounded-lg bg-blue-300 text-center'
                            placeholder='Please Enter Your Phone'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-semibold'>WEBSITE</label>
                        <input type="text"
                            name='website'
                            id='website'
                            value={data.website}
                            onChange={handlechange}
                            className='w-11/12 h-[25px] rounded-lg bg-blue-300 text-center'
                            placeholder='Please Enter Your Website'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button className='w-[85px] h-[45px] rounded-lg bg-blue-500 text-white font-bold cursor-pointer' type='submit'>{user?"EDIT":"SUBMIT"}</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Adduser;