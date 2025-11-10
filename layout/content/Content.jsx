import { Navigate, Route, Routes } from "react-router";
import Users from "../../pages/users/Users";
import Posts from "../../pages/posts/Posts";
import Comments from "../../pages/comments/Comments";
import Tasks from "../../pages/tasks/Tasks";
import Gallery from "../../pages/gallery/Gallery";
import Adduser from "../../pages/users/Adduser";
import Addcomment from "../../pages/comments/Addcomment";
import Addtask from "../../pages/tasks/Addtask";

const Content = () => {
    return (
        <div className="fixed top-0 left-0 pr-64 pt-16  w-full h-screen dark:bg-blue-950">
            <div className="">
                <Routes>
                   <Route path="/users" element={<Users/>}></Route>
                   <Route path="/users/adduser" element={<Adduser/>}></Route>
                   <Route path="/users/edit/:id" element={<Adduser/>}></Route>
                   <Route path="/posts" element={<Posts/>}></Route>
                   <Route path="/comments" element={<Comments/>}></Route>
                   <Route path="/comments/add" element={<Addcomment/>}></Route>
                   <Route path="/tasks" element={<Tasks/>}></Route>
                   <Route path="/tasks/add" element={<Addtask/>}></Route>
                   <Route path="/gallery" element={<Gallery/>}></Route>
                   <Route path="/" element={<Navigate to="/users"/>}></Route>
                </Routes>

            </div>
        </div>
    );
};

export default Content;
