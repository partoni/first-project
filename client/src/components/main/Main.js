import React, { useContext } from "react";
import { AuthContext } from "../../hoc/AuthContext";
import style from './Main.module.css'

export const Main = ()=>{
    const user = useContext(AuthContext)
    console.log('Main');
    return(
        <div className={style.main}>
            <h2>Главная</h2>
            
        </div>
    )
}