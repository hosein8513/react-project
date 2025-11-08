import axios from "axios"

export const getposts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
}

export const deletepost = async (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}