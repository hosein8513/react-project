import axios from "axios"

export const getcomments = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
    return response.data
}

export const createcomment =(data)=>{
    return axios({
        url:`https://jsonplaceholder.typicode.com/users`,
        method:"post",
        data,
        headers:{
           'Content-type': 'application/json; charset=UTF-8'
        }
    })
}

export const deletecomment = (id)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
}