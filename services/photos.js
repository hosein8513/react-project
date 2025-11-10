import axios from "axios"

export const getphotos = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
    return response.data
}
