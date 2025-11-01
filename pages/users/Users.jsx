import { useEffect, useState } from "react";
import { getusers } from "../../services/users";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";

const Users = () => {
    const [users, setusers] = useState([])
    const handlegetusers = async () => {
        try {
            const data = await getusers()
            setusers(data || [])
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        handlegetusers()
    }, [])


    return (
        <div className="w-full h-screen rounded-lg  flex flex-col justify-center items-center">
            <div className="w-full p-4 flex justify-between items-center">
                <h2 className="text-[30px] font-semibold">User Managment</h2>
                <button className="w-[120px] h-[30px] rounded-lg flex gap-2 justify-center items-center bg-blue-300 text-white dark:bg-blue-800">
                    Add User <HiUserAdd />
                </button>
            </div>
            <table className="rounded-lg w-[90%] border-separate border-spacing-0 overflow-hidden">
                <thead className="bg-blue-400 dark:bg-blue-800 font-semibold text-[20px] ">
                    <tr>
                        <th className="p-3">#</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>WEBSITE</th>
                        <th>OPERATION</th>
                    </tr>
                </thead>
                <tbody className="bg-blue-200 dark:bg-blue-700 font-semibold text-[15px] rounded-b-lg">
                    {users.map((user) => (
                        <tr key={user.id} className=" ">
                            <td className="border-t ">{user.id}</td>
                            <td className="border-t ">{user.name}</td>
                            <td className="border-t ">{user.email}</td>
                            <td className="border-t  ">{user.phone}</td>
                            <td className="border-t  ">{user.website}</td>
                            <td className="border-t p-3  flex gap-3 justify-center items-center">
                                <button className="w-[30px] h-[30px] rounded-lg bg-yellow-400 flex justify-center items-center"><MdModeEdit /></button>
                                <button className="w-[30px] h-[30px] rounded-lg bg-red-600 flex justify-center items-center"><MdDelete /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;