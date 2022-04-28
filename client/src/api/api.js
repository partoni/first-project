import * as axios from 'axios'

const instans = axios.create({
    baseURL:'http://localhost:5000/api/',
    withCredentials: true
})
export const usersApi = {
     getUser(email,password){
       return instans.post('user/auth',{email,password})
    },
    addUser(email,password){
        return instans.post('user/reg',{email,password})
    }
}
export const driverApi = {
    getAllDrivers(){
       return instans.get('drivers')
    },
    addDriver(driver){
        return instans.post('addDriver',driver)
    },
    delDriver(driver){
        return instans.post('delDriver',driver)
    },
    upDriver(driver){
        return instans.post('upDriver',driver)
    },
}
