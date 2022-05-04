
import './App.css';


import {Link, Route, Routes} from 'react-router-dom'
import PageAuth from './components/auth/Auth';
import Reg from './components/Reg';
import { Drivers } from './components/drivers/Drivers';
import { Main } from './components/main/Main';
import { Dispetchers } from './components/dispetchers/Dispetchers';
import { PrivetPage } from './hoc/PrivetPage';
import { WithAuth } from './hoc/AuthContext';

function App() {
 
  
  return (
    <WithAuth>
    <div className="App">
      {/* <div className='conteiner'> */}
        <div className='content'>
          <div className='content__header header'>
            <div className='header__item'><Link to={'/'}>Главная</Link></div>
            <div className='header__item'><Link to={'/city'}>Города</Link></div>
            <div className='header__item'><Link to={'/auth'}>Регистрация/Вход</Link></div>
          </div>
          <div className='content__main main'>
            <div className='main__navbar'>
              <ul>
                <li><Link to={'/drivers'}>Водители</Link></li>
                <li><Link to={'/dispetchers'}>Диспетчеры</Link></li>
              </ul>
            </div>
            <div className='main__content'>

              <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/auth' element={<PageAuth/>}/>
              <Route path='/drivers' element={<PrivetPage><Drivers/></PrivetPage> }/>
              <Route path='/dispetchers' element={<PrivetPage><Dispetchers/></PrivetPage> }/>
              <Route path='/reg' element={<Reg/>}/>
            </Routes>
            </div>
            
          </div>
          <div className='content__footer'>
            footer
          </div>
        </div>
      {/* </div> */}
    </div>
    </WithAuth>
    
  );
}

export default App;
