import React, { useState } from "react";

import { driverApi } from "../../api/api";
import { MyButton } from "../UI/button/MyButton";
import style from "./Driver.module.css"

const Driver =(props)=>{
    let[details,setDetails]=useState(false)
    console.log(props);
    const {name,firstName,auto,phone,id}=props.driver
    function onDetails(el) {
        console.log(el);
       setDetails(!details)
    }
    function delDriver(el) {
        el.preventDefault()
        driverApi.delDriver(props.driver)
        props.getAllDrivers('')
    }

    return(
        <div className={details?style.driver__details:style.driver} onClick={onDetails}>
            <div>{name} {firstName}  {auto}</div>
            <MyButton content='Удалить' callback={delDriver}/>
            
        </div>
    )
}
export default Driver