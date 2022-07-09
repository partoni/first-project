import * as axios from 'axios'

const instans = axios.create({
    baseURL:'http://localhost:5000/api/',
    withCredentials: true
})
instans.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})
instans.interceptors.response.use((config) => 
    {
        return config;
    },async(err)=>{
        console.log('err interceptor----- '+err)
        const originalRequest = err.config;
        // console.log('err.config-----'+originalRequest);
        if (err.response.status == 500 && err.config && !err.config._isRetry) {
            originalRequest._isRetry = true;
        try{
           let newRequest = await instans.get('user/refresh')
           console.log(newRequest.data.accessToken);
           localStorage.setItem("token",newRequest.data.accessToken)
        }catch(error){}
    }
    throw err
})
export const usersApi = {
    logout(){
        return instans.get('user/logout')
    },
    refresh(){
        return instans.get('user/refresh')
    },
     getUser(email,password){
       return instans.post('user/auth',{email,password})
    },
    addUser(email,password){
        return instans.post('user/reg',{email,password})
    }
}
export const driverApi = {
    getAllDrivers(){
       return instans.get('drivers/drivers')
    },
    addDriver(driver){
        return instans.post('drivers/addDriver',driver)
    },
    delDriver(driver){
        return instans.post('drivers/delDriver',driver)
    },
    upDriver(driver){
        return instans.post('upDriver',driver)
    },
}
