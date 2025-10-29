import Darkmode from "../../components/Darkmode";
import Sidebaritem from "./Sidebaritem";

const Sidebar = () => {
    return (
        <div className="fixed top-0 right-0 h-screen w-64 bg-blue-200  dark:bg-blue-600">
            <div className="w-full h-16 bg-blue-400 dark:bg-blue-900   flex justify-between items-center p-4">
                <span className="text-[15px] font-semibold">Manager Panel</span>
              <Darkmode/>
            </div>
            <div className="w-full p-4">
                <ul className="flex flex-col gap-4">
                  <Sidebaritem to={"/users"}>Users</Sidebaritem>
                  <Sidebaritem to={"/posts"}>Posts</Sidebaritem>
                  <Sidebaritem to={"/comments"}>Comments</Sidebaritem>
                  <Sidebaritem to={"/tasks"}>Tasks</Sidebaritem>
                  <Sidebaritem to={"/gallery"}>Gallery</Sidebaritem>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
