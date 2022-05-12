import { useContext } from "react"
import { useLocation,Navigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"


export const PrivetPage = ({children})=>{
    const location = useLocation()
    let [user,setUser] = useContext(AuthContext)
    console.log('privetPage');
    console.log(user);
    if(!user.email){
        return(<Navigate to="/auth" state={{from:location}}/>)
    }
    // else{
    //     switch (user.role) {
    //         case "admin":
                
    //             return  (<Navigate to="/admin"/>)
        
    //         default:
    //             break;
    //     }
    // }
    
    return(
        children
    )
}
