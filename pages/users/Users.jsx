import { useEffect, useState } from "react";
import { deleteUser, getusers } from "../../services/users";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import Usermanagment from "./usermanagment";
import { Link } from "react-router";

const Users = () => {
    const [user, setusers] = useState([])
    const handledelete = async (id) => {
        const res = await deleteUser(id)
        if (res.status === 200) {
            alert("DONE")
            setusers(user.filter(user => user.id !== id))
        }
    };
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
        <div className="w-full rounded-lg  flex flex-col justify-center items-center">
            <div className="w-full p-4 flex justify-between items-center">
                <h2 className="text-[30px] font-semibold">User Managment</h2>
                <Link to={"/users/adduser"} className="w-[120px] h-[30px] rounded-lg flex gap-2 justify-center items-center bg-blue-300 text-white dark:bg-blue-800">
                    Add User <HiUserAdd />
                </Link>
            </div>
            <Usermanagment user={user} handledelete={handledelete} />
        </div>
    );
};

export default Users;