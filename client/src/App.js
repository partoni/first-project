import React from 'react';
import './App.css';


import {Link, Route, Routes} from 'react-router-dom'
import PageAuth from './components/auth/Auth';
import Reg from './components/Reg';
import { Main } from './components/main/Main';
import { PrivetPage } from './hoc/PrivetPage';
import { WithAuth } from './hoc/AuthContext';
import DriversPage from './components/driversPage/DriversPage';
import DispetchersPage from './components/dispetchersPage/DispetchersPage';
import AdminPage from './components/adminPage/AdminPage';
import { AdminAuth } from './hoc/AdminAuth';
import Header from './components/Header/Header';



function App() {
 
  return (
    <WithAuth>
    <div className="App">
     
        <div className='content'>
          <Header/>
          <div className='main'>
            
            

              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/auth' element={<PageAuth/>}/>
                <Route path='/forDrivers' element={<PrivetPage><DriversPage/></PrivetPage> }/>
                <Route path='/admin/*' element={<PrivetPage><AdminAuth><AdminPage/></AdminAuth></PrivetPage> }/>
                <Route path='/forDispetchers' element={<PrivetPage><DispetchersPage/></PrivetPage> }/>
                <Route path='/reg' element={<Reg/>}/>
              </Routes>
            
            
          </div>
          <div className='footer'>
            footer
          </div>
        </div>
      
    </div>
    </WithAuth>
    
  );
}

export default App;
