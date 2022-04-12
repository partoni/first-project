import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { usersApi } from "../api/api";
import logo from "../logo.svg";

const Logo = ()=>{
    let [users,setUsers] = useState([])
  useEffect(()=>{
    usersApi.getUsers().then(user=>{
      console.log(user.data);
      return setUsers(user.data)})    
  },[])
    return(
        <div>
            <div><NavLink to='/auth'>Регистрацмя</NavLink></div>
            <img src={logo} className="App-logo" alt="logo" />
                    
            {users.length!==0?users.map(user=><li key={user.id}>{user.name}</li>):<p>нет никто</p>}
        </div>
    )
}
export default Logo