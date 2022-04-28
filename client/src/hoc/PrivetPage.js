import { useContext } from "react"
import { useLocation,Navigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"


export const PrivetPage = ({children})=>{
    const location = useLocation()
    let context = useContext(AuthContext)
    console.log('privetPage');
    console.log(context);
    if(!context[0].email)return(<Navigate to="/auth" state={{from:location}}/>)

    return(
        children
    )
}
