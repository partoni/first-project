import React, { useState, useEffect, useRef} from 'react'
import { driverApi } from '../../api/api'
import Driver from './Driver';
import style from './Drivers.module.css'
export const Drivers = () => {
    console.log('компонент drivers');
    const [drivers, setDrivers] = useState([
        { name: 'Anton', firstName: 'Petrov', auto: 'skoda', phone: '01234567' }
    ])
    let nameRef = useRef()
    let firstNameRef = useRef()
    let autoRef = useRef()
    let phoneRef = useRef()
    useEffect(()=>{
        driverApi.getAllDrivers()
        .then((driversDB)=>setDrivers(driversDB.data))
        
    },[])
    console.log(drivers);
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
        setDrivers([...drivers,newDriver])
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
                    <div className={style.form__button_find } onClick={findDriver}>Найти</div>
                    <div className={style.form__button_add} onClick={addDriver}>Добавить</div>
                </div>
            </div>
            <div className={style.item}>

                {drivers.length
                    ? drivers.map(driver =><Driver driver={driver}/>)
                    : <span>Нет водителей</span>
                }

            </div>
        </div>
    )
}