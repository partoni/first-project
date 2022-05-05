import React from "react";
import style from "./MyButton.module.css"

export const MyButton = (props)=>{
    const {content,callback}=props
    return(
        <div className={style.button} onClick={callback}>{content}</div>
    )
}