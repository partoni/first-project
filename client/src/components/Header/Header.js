import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { usersApi } from "../../api/api"
import { AuthContext } from "../../hoc/AuthContext"
import style from "./Header.module.css"


const Header = () => {
    const [user,setUser]=useContext(AuthContext)
    const logout=()=>{
        setUser({})
        usersApi.logout()
    }

    return (
        
            <div className={style.header}>
                {user.role==='ADMIN'?<div className={style.admin}><Link to={'/admin'}>админпанель</Link></div>:null}
                <div className={style.headerItem}><Link to={'/'}>Главная</Link></div>
                <div className={style.headerItem}><Link to={'/city'}>Города</Link></div>
                <div className={style.headerItem}>
                    <Link to={'/auth'}>Регистрация/Вход</Link>                    
                </div>
                <div className={style.logout} onClick={logout}>Выйти</div>
            </div>
        
    )
}
export default Header