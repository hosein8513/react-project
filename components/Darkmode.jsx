import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import useDarkmode from "../hooks/useDarkmode";

const Darkmode = () => {
    const { setdark, setlight } = useDarkmode()
    return (
        <span className="cursor-pointer transform dark:rotate-90 transition-all">
            <IoMoon className="dark:hidden w-[70px]" onClick={setdark} />
            <IoSunnyOutline className="hidden dark:inline w-[70px]" onClick={setlight} />
        </span>
    );
};

export default Darkmode;