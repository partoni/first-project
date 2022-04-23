import React, { useState } from 'react'
import { usersApi } from '../../api/api'
import style from './Auth.module.css'

export default function PageAuth() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    function changEmail(el) {
        setEmail(el.target.value)
    }
    function changPassword(el) {
        setPassword(el.target.value)
    }
    function addUser(el) {
        el.preventDefault()
        usersApi.addUser(email,password)
        setEmail('')
        setPassword('')
    }
    return(
        <div className={style.auth}>
            <div className={style.title}>авторизация</div>
            <div className={style.input}>
                
                <div><input id='email'value={email} onChange={changEmail} placeholder='email'/></div>
               
                <div><input id='password'value={password} onChange={changPassword} placeholder='password'/></div>
            </div>
            
            <div className={style.button} onClick={addUser}>войти</div>
            
        </div>
    )
}