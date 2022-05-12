import React from "react";
import {Link, Route, Routes} from 'react-router-dom'
import { PrivetPage } from "../../hoc/PrivetPage";
import { Dispetchers } from "../dispetchers/Dispetchers";
import { Drivers } from "../drivers/Drivers";
import style from "./AdminPage.module.css"

const AdminPage = ()=>{
    console.log('AdminPAge');
    return(
        <div className={style.admin}>
            <div className={style.navbar}>
             <ul>
                <li><Link to={'/admin'}>Водители</Link></li>
                <li><Link to={'/admin/dispetchers'}>Диспетчеры</Link></li>
              </ul>
            </div >

            <div className={style.content}>
              <Routes>
              
              <Route index element={<PrivetPage><Drivers/></PrivetPage> }/>
              <Route path='dispetchers' element={<PrivetPage><Dispetchers/></PrivetPage> }/>
              
            </Routes>
            </div>
        </div>
    )
}
export default AdminPage