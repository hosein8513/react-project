import axios from "axios"

export const getusers =async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
}

export const createUser = (data)=>{
    return axios({
        url:"https://jsonplaceholder.typicode.com/users",
        method:"post",
        data,
        headers:{
           'Content-type': 'application/json; charset=UTF-8'
        }

    })
}

export const updateUser = (id,data) =>{
return axios({
    url:`https://jsonplaceholder.typicode.com/users/${id}`,
    method:"put",
    data,
    headers:{
         'Content-type': 'application/json; charset=UTF-8'
    }

})
}

export const deleteUser =(id)=>{
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
}