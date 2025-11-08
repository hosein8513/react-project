import { useEffect, useState } from "react";
import { deletecomment, getcomments } from "../../services/comments";
import { Link } from "react-router";
import { FaCommentDots } from "react-icons/fa";

const Comments = () => {
    const [comments, setcomments] = useState([])

    const handlegetcomments = async () => {
        try {
            const data = await getcomments()
            console.log(data);
            
            setcomments(data.slice(1,11) || [])
        } catch (error) {
            console.log(error);

        }

    }
    const handledelete = async (id) => {
        const res = await deletecomment(id)
        if (res.status === 200) {
            alert("DELETED")
            setcomments(comments.filter(comment => comment.id !== id))
        }

    }

    useEffect(() => {
        handlegetcomments()
    }, [])
    return (
        <div className="pt-4 h-screen flex flex-col">
            <div className="flex justify-between! items-center p-4">
                <h1 className="text-[30px] font-bold">COMMENTS</h1>
                <Link to={"/comments/add"} className="w-[150px] h-[45px] rounded-lg flex justify-center items-center text-center bg-blue-500 text-white gap-3">add Comment <FaCommentDots /></Link>
            </div>

            <div className="w-full overflow-y-auto">
                <div className="w-[70%]  grid grid-cols-1 md:grid-cols-2 gap-4 pb-24 mx-auto">
                    {comments.map(comment => (
                        <div className="w-full bg-red-100 rounded-lg border flex flex-col p-4" key={comment.id}>
                            <span className="text-[20px] font-semibold text-gray-900">{comment.name}</span>
                            <span className="text-[17px] font-semibold text-gray-800 mt-4">{comment.email}</span>
                            <p className="text-[14px] text-gray-600 mt-4">{comment.body}</p>
                            <button className="w-[90px] h-[45px] rounded-lg bg-red-500 text-white mt-7 cursor-pointer hover:animate-pulse" onClick={()=>handledelete(comment.id)}>DELETE</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;