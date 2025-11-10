import { useEffect, useState } from "react";
import { deletetasks, gattasks } from "../../services/tasks";
import { MdOutlineTaskAlt } from "react-icons/md";
import { Link } from "react-router";

const Tasks = () => {
    const [task, settask] = useState([])
    const handledelete = async (id) => {
        const res = await deletetasks(id)
        if (res.status === 200) {
            alert("Well Done!")
            settask(task.filter(ta => ta.id !== id))
        }
    }

    const handlegettasks = async () => {
        try {
            const data = await gattasks()
            settask(data.slice(1,11) || [])
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        handlegettasks()
    }, [])
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex justify-between items-center p-4">
                <h1 className="text-[30px] font-bold">TASKS</h1>
                <Link to={"/tasks/add"} className="w-[150px] h-[45px] rounded-lg flex justify-center items-center text-center bg-blue-500 text-white gap-3">add task <MdOutlineTaskAlt /></Link>
            </div>
            <div className="w-full overflow-y-auto">
                <div className="w-[70%]  grid grid-cols-1 md:grid-cols-2 gap-4 pb-24 mx-auto">
                    {task.map(ta => (
                        <div className="w-full bg-orange-100 rounded-lg border flex flex-col p-4" key={ta.id}>
                            <span className="text-[20px] font-semibold text-gray-900">{ta.title}</span>
                            <span className="text-[17px] font-semibold text-gray-800 mt-4">{ta.completed}</span>
                            <button className="w-[90px] h-[45px] rounded-lg bg-green-500 text-white mt-7 cursor-pointer hover:animate-pulse" onClick={()=>handledelete(ta.id)}>COMPLETED</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;