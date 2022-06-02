import React, { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { usersApi } from '../../api/api'
import { AuthContext } from '../../hoc/AuthContext'
import { MyButton } from '../UI/button/MyButton'
import style from './Auth.module.css'


export default function PageAuth() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [user,setUser] = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    let lastPage = location.state?.from?.pathname||'/'
    console.log('PageAuth');
    
    function changEmail(el) {
        setEmail(el.target.value)
    }
    function changPassword(el) {
        setPassword(el.target.value)
    }
    function addUser(el) {
        // el.preventDefault()
        usersApi.addUser(email,password)
        .then(user=>{
            localStorage.setItem('token',user.data.accessToken)
            console.log(user.data);
            setUser(user)

        })
        setEmail('')
        setPassword('')
    }
    function choose(role) {
        switch (role) {
            case "ADMIN":
               return navigate('/admin',{replase:true})
                
            case "DRIVER":
               return navigate('/forDrivers',{replase:true})
               
            case "DISPETCHER":
              return navigate('/forDispetchers',{replase:true})
                        
            case "USER":
                return navigate('/',{replase:true})
                
        }
    }
    
    const getUser = async(el)=> {
        // el.preventDefault()
        await usersApi.getUser(email,password)
        .then(user=>{
            setUser(user.data)
            localStorage.setItem('userRole',user.data.role)
            localStorage.setItem('token',user.data.accessToken)
            choose(user.data.role)
            })
        .catch(e=>console.log(e))
        // setEmail('')
        // setPassword('')
        console.log(user.role);
        
         

    }
    return(
        <div className={style.auth}>
            <div className={style.title}>авторизация</div>
            <div className={style.input}>
                
                <div><input id='email'value={email} onChange={changEmail} placeholder='email'/></div>
               
                <div><input id='password'value={password} onChange={changPassword} placeholder='password'/></div>
            </div>
            <div className={style.button}>
            <MyButton content='войти' callback={getUser}/>
            <MyButton content='Регистрация' callback={addUser}/>
            
            
            </div>
            <h2>{user.email?user.email:'no user'}</h2>
        </div>
    )
}