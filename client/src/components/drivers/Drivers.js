import React,{useState} from 'react'
import driverApi from '../../api/api'

export const Drivers = ()=>{
    const [drivers, setDrivers] = useState([
        {name:'Anton',firstName:'Petrov',auto:'skoda',phone:'01234567'}
    ])

    function addDriver(e) {

        // let newDriver = 
        // driverApi.addDriver()
    }
    return(
        <>
        <div className='drivers'>
            <form className=''>
                <label>имя<input name="name"/></label>
                <label>фамилия<input name='firstName'/></label>
                <label>авто<input name="auto" /></label>
                <label>телефон<input name="phone" /></label>
                <button onClick={addDriver}>сохранить</button>
            </form>
        </div>
        <ul>
            {drivers.length
            ? drivers.map(driver=><li key={driver.id}>{driver.name} {driver.firstName} {driver.auto} </li>)
            :<span>Нет водителей</span>
            }
        </ul>
        </>
    )
}