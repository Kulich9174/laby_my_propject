import React from 'react';
import '../src/global.css'

import {MainPage} from './pages/Main/MainPage';
import { Route,Routes } from 'react-router-dom';
import {Info} from './pages/AboutUs/AboutUs';
import { Contacts } from './pages/Contacts/Contacts';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { BrockersPage} from './pages/For_brockers/BrockersPage';
import { WarehousesPage } from './pages/Our_warehouses/WarehousesPage';
import { MenuNavPage } from './pages/MenuNavPage/MenuNavPage';

import { Layout } from './components/Layout';

const App: React.FC = () => {

  return (
      <>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/about' element={<Info/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/brockers-page' element={<BrockersPage/>}/>
          <Route path='/warehouses-page' element={<WarehousesPage/>}/>
          <Route path='/MenuNav' element={<MenuNavPage/>}/>
        </Route>
                
        </Routes>
      </>
  );
}

export default App;
