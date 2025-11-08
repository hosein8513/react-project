import { useEffect, useState } from "react";
import { deletepost, getposts } from "../../services/posts";

const Posts = () => {
    const [posts, setposts] = useState([])
    const handledelete = async (id) => {
        const res = await deletepost(id)
        if (res.status === 200) {
            alert("DELETED")
            setposts(posts.filter(post => post.id !== id))
        }
    }
    const handlegetposts = async () => {
        try {
            const res = await getposts()
            setposts(res.slice(1,11) || [])
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        handlegetposts()
    }, [])


    return (
        <div className="flex flex-col justify-start items-center  h-screen">
            <h1 className="text-[30px] font-bold">POSTS</h1>
            <div className="w-full overflow-y-auto">
            <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 mx-auto pb-24 gap-4">
                {posts.map(post => (
                    <div className="w-full border rounded-lg bg-amber-100 p-4 dark:bg-amber-800">
                        <span className="text-[20px] font-semibold m-5">{post.title}</span>
                        <p className="text-[12px] text-gray-600 m-4 dark:text-gray-200">{post.body}</p>
                        <button className="w-[90px] h-[50px] rounded-lg bg-red-600 text-white cursor-pointer hover:animate-pulse" onClick={()=>handledelete(post.id)}>DELETE</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Posts;