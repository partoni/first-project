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
    console.log('авторизация',user.email)
    console.log(lastPage);
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
            setUser(user)
        console.log(user) })
        setEmail('')
        setPassword('')
    }
    const getUser = async(el)=> {
        // el.preventDefault()
        await usersApi.getUser(email,password)
        .then(user=>{
            setUser(user.data)
            })
        .catch(e=>console.log(e))
        // setEmail('')
        // setPassword('')
        navigate(lastPage,{replase:true})
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
            <MyButton content='Регистрация' callback={getUser}/>
            
            </div>
            <h2>{user.email?user.email:'no user'}</h2>
        </div>
    )
}