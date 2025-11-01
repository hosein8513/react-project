import axios from "axios"

export const getusers =async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
}