import React, { useState, useEffect, useRef} from 'react'
import { driverApi } from '../../api/api'
import { MyButton } from '../UI/button/MyButton';
import Driver from './Driver';
import style from './Drivers.module.css'
export const Drivers = () => {
    console.log('компонент Drivers')
    
    const [drivers, setDrivers] = useState([
        { name: 'Anton', firstName: 'Petrov', auto: 'skoda', phone: '01234567' }
    ])
    const getAllDrivers = async()=>{
        await driverApi.getAllDrivers()
        .then((driversDB)=>setDrivers(driversDB.data))
    }
    let nameRef = useRef()
    let firstNameRef = useRef()
    let autoRef = useRef()
    let phoneRef = useRef()
    useEffect(()=>{
        getAllDrivers()
        
    },[])
   
    function findDriver() {
        
    }
    function addDriver(e) {
        e.preventDefault()
        let name = nameRef.current.value
        let firstName = firstNameRef.current.value
        let auto = autoRef.current.value
        let phone = phoneRef.current.value
        let newDriver = { name, firstName, auto, phone }
        nameRef.current.value=''
        firstNameRef.current.value=''
        autoRef.current.value=''
        phoneRef.current.value=''
        driverApi.addDriver(newDriver)
        getAllDrivers()
    }
    return (
        <div className={style.drivers}>
            <div className={style.form}>
                <div className={style.form__inputs}>
                    <div className={style.form__input}>
                        <input type='text' ref={nameRef} placeholder='имя'></input>
                    </div>
                    <div className={style.form__input}>
                        <input type='text' ref={firstNameRef} placeholder='фамилия'></input>
                    </div>
                    <div className={style.form__input}>
                        <input type='text' ref={autoRef} placeholder='машинв'></input>
                    </div>
                    <div className={style.form__input}>
                        <input type='text' ref={phoneRef} placeholder='телефон'></input>
                    </div>

                </div>
                <div className={style.form__buttons}>
                <MyButton content='Найти' callback={findDriver}/>
                <MyButton content='Добавить' callback={addDriver}/>
                </div>
            </div>
            <div className={style.listDrivers}>

                {drivers.length
                    ? drivers.map(driver =><Driver driver={driver}  getAllDrivers={getAllDrivers}/>)
                    : <span>Нет водителей</span>
                }

            </div>
        </div>
    )
}