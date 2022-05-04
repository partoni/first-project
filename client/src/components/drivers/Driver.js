import React, { useState } from "react";
import { driverApi } from "../../api/api";
import style from "./Driver.module.css"

const Driver =(props)=>{
    let[details,setDetails]=useState(false)
    console.log(props);
    const {name,firstName,auto,phone,id}={...props.driver}
    function onDetails(el) {
        console.log(el);
       setDetails(!details)
    }
    function delDriver(el) {
        driverApi.delDriver(props.driver)
    }

    return(
        <div className={details?style.driver__details:style.driver} onClick={onDetails}>
            <div>{name} {firstName}  {auto}</div>
            <div className={style.button} onClick={delDriver}>удалить</div>
            
        </div>
    )
}
export default Driver