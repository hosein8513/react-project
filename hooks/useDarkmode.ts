import { useCallback, useEffect } from "react";

const useDarkmode = () => {
const setdark = useCallback(()=>{
localStorage.setItem("darkmode","1")
document.body.classList.add("dark")
},[])

const setlight = ()=>{
    localStorage.setItem("darkmode","0")
    document.body.classList.remove("dark")
}

const isdark = useCallback(()=>{
    const laststatus = localStorage.getItem("darkmode")
    return Number(laststatus)
},[])

const initdarkmode =useCallback(()=>{
if(isdark())setdark
},[isdark,setdark])

useEffect(()=>{
    initdarkmode()
},[initdarkmode])

    return {
        setdark,
        setlight,
        isdark
    }
      
    

    ;
};

export default useDarkmode;