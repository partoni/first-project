
import './App.css';

// import{BrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import PageAuth from './components/auth';
import Logo from './components/logo';

// const addUsers = async()=>{
//     let users = await getUsers()
//     .then(data=>console.log(data))
//     return users
    
// }
function App() {
 
  
  return (
    
    <div className="App">
      
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Logo/>}/>
        <Route path='/auth' element={<PageAuth/>}/>
      </Routes>
      </header>
    </div>
    
  );
}

export default App;
