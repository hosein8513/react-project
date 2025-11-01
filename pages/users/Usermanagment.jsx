import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router';

const Usermanagment = ({ user ,handledelete}) => {
  

    return (
        <div className='w-full  rounded-lg flex justify-center items-center'>
            <table className="rounded-lg w-[90%] border-separate border-spacing-0 overflow-hidden ">
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
                    {user.map((user) => (
                        <tr key={user.id} className="p-4 ">
                            <td className="border-t pr-2">{user.id}</td>
                            <td className="border-t ">{user.name}</td>
                            <td className="border-t ">{user.email}</td>
                            <td className="border-t  ">{user.phone}</td>
                            <td className="border-t  ">{user.website}</td>
                            <td className="border-t p-3  flex gap-3 justify-center items-center">
                                <Link to={`/users/edit/${user.id}`} className="w-[30px] h-[30px] rounded-lg bg-yellow-400 flex justify-center items-center cursor-pointer" state={{ user }}><MdModeEdit /></Link>
                                <button className="w-[30px] h-[30px] rounded-lg bg-red-600 flex justify-center items-center cursor-pointer" onClick={()=>handledelete(user.id)}><MdDelete /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Usermanagment;