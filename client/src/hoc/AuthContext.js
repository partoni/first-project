import { createContext, useState } from "react"

export const AuthContext = createContext(null)
export const WithAuth =({children})=>{
    const [user,setUser] = useState({role:'USER'})
    // const signIn = (item)=>{
    //     setUser(item)
    // }
    const value = [user,setUser]
    return(
        <AuthContext.Provider value={value}>
            {children}

        </AuthContext.Provider>
    )
}
    
