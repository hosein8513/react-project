import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Addtask = () => {
    const [data, setdata] = useState({
        title: "",
        completed: ""
        
    })
    const navigate = useNavigate()

    const handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(!data.title || !data.completed){
            alert("please fill all fields!")
            return
        }
        alert("Task Added")
        navigate(-1)
    }
    return (
         <div className="bg-gray-400 flex justify-center items-center h-screen">
            <div className="w-4/12 h-8/12 bg-white rounded-lg flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col">
                    <label className="text-[18px] font-semibold">TITLE</label>
                    <input type="text" className="w-11/12 h-[30px] rounded-lg bg-gray-400 text-center" placeholder="Enter Your Title" 
                    name="title"
                    value={data.title}
                    onChange={handlechange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[18px] font-semibold">COMPLETED</label>
                    <input type="email" className="w-11/12 h-[30px] rounded-lg bg-gray-400 text-center" placeholder='Enter true or false' 
                    name="completed"
                    value={data.completed}
                    onChange={handlechange}
                    />
                </div>
                <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500" onClick={handlesubmit} type="submit">SUBMIT</button>
            </div>
        </div>
    );
};

export default Addtask;