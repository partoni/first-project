import React, { useState } from 'react'
import { usersApi } from '../api/api'


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
        <div className='auth'>
            <div className='conteiner'>
                <div className='auth__window window'>
                    <div className='window__title'>авторизация</div>
                    <div className='window__input'>
                        <label for='email'>email</label>
                        <input id='email'value={email} onChange={changEmail} placeholder='email'/>
                        <label for='password'>password</label>
                        <input id='password'value={password} onChange={changPassword} placeholder='password'/>
                    </div>
                    <div className='window__submit'>
                        <div className='button' onClick={addUser}>отправить</div>
                    </div>


                </div>
            </div>
        </div>
    )
}