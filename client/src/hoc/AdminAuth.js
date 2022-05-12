import { useContext } from "react"
import { AuthContext } from "./AuthContext"
// import { Navigate } from "react-router-dom"



export const AdminAuth = ({children})=>{
    const [user]=useContext(AuthContext)
    if(user.role!=="ADMIN") return(<div>вы не админ</div> )
    return (
        children
    )
}