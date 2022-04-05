import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {usersApi} from './api/api'

// const addUsers = async()=>{
//     let users = await getUsers()
//     .then(data=>console.log(data))
//     return users
    
// }
function App() {
 let [users,setUsers] = useState([])
  useEffect(()=>{
    usersApi.getUsers().then(user=>{
      console.log(user.data);
      return setUsers(user.data)})
    
    
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                
        {users?users.map(user=><li key={user.id}>{user.name}</li>):<p>нет никто</p>}
      </header>
    </div>
  );
}

export default App;
