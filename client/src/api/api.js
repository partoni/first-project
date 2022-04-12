import * as axios from 'axios'

const instans = axios.create({
    baseURL:'http://localhost:5000/api/',
    withCredentials: true
})
export const usersApi = {
    getUsers(){
       return instans.get('user')
    },
    addUser(email,password){
        return instans.post('reg',{email,password})
    }
}