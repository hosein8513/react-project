import axios from "axios"

export const gattasks = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data
}


export const createtask = async(data)=>{
    return axios ({
         url:`https://jsonplaceholder.typicode.com/todos`,
        method:"post",
        data,
        headers:{
           'Content-type': 'application/json; charset=UTF-8'
        }
    })
}


export const deletetasks = (id)=>{
    return axios .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
}