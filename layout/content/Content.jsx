import { Route, Routes } from "react-router";
import Users from "../../pages/users/Users";
import Posts from "../../pages/posts/Posts";
import Comments from "../../pages/comments/Comments";
import Tasks from "../../pages/tasks/Tasks";
import Gallery from "../../pages/gallery/Gallery";

const Content = () => {
    return (
        <div className="fixed top-0 left-0 pr-64 pt-16 w-full h-screen bg-green-200">
            <div className="p-4">
                <Routes>
                   <Route path="/users" element={<Users/>}></Route>
                   <Route path="/posts" element={<Posts/>}></Route>
                   <Route path="/comments" element={<Comments/>}></Route>
                   <Route path="/tasks" element={<Tasks/>}></Route>
                   <Route path="/gallery" element={<Gallery/>}></Route>
                </Routes>

            </div>
        </div>
    );
};

export default Content;
