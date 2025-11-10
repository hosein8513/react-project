import { useState } from "react";
import { useNavigate } from "react-router";

const Addcomment = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        content: ""
    })
    const navigate = useNavigate()

    const handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(!data.name || !data.email || !data.content){
            alert("please fill all fields!")
            return
        }
        alert("Comment Added")
        navigate(-1)
    }
    return (
        <div className="bg-gray-400 flex justify-center items-center h-screen">
            <div className="w-4/12 h-8/12 bg-white rounded-lg flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col">
                    <label className="text-[18px] font-semibold">NAME</label>
                    <input type="text" className="w-11/12 h-[30px] rounded-lg bg-gray-400 text-center" placeholder="Enter Your Name" 
                    name="name"
                    value={data.name}
                    onChange={handlechange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[18px] font-semibold">EMAIL</label>
                    <input type="email" className="w-11/12 h-[30px] rounded-lg bg-gray-400 text-center" placeholder="Enter Your Email" 
                    name="email"
                    value={data.email}
                    onChange={handlechange}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[18px] font-semibold">COMMENT</label>
                    <input type="text" className="w-11/12 h-[30px] rounded-lg bg-gray-400 text-center" placeholder="Enter Your Comment" 
                    name="content"
                    value={data.content}
                    onChange={handlechange}
                    />
                </div>
                <button className="w-[90px] h-[45px] rounded-lg text-white bg-green-500" onClick={handlesubmit} type="submit">SUBMIT</button>
            </div>
        </div>
    );
};

export default Addcomment;