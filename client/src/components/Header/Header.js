import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../hoc/AuthContext"
import style from "./Header.module.css"


const Header = () => {
    const [user,setUser]=useContext(AuthContext)
    const logout=()=>{
        setUser({})
    }

    return (
        
            <div className={style.header}>
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