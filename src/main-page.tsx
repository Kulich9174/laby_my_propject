import React from 'react';
import '../src/global.css'
import Header from './components/Header/Header';
import Footer from './components/Footer';
import {MainPage} from './pages/Main/MainPage';
import { Route,Routes } from 'react-router-dom';
import {Info} from './pages/AboutUs/AboutUs';
import { Contacts } from './pages/Contacts/Contacts';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { BrockersPage} from './pages/For_brockers/BrockersPage';
import { WarehousesPage } from './pages/Our_warehouses/WarehousesPage';
const App: React.FC = () => {
  // const [menuButtonState, setMenuButtonState] = useState<boolean>(false);
  

  return (
      <>
      <div className=' h-full w-full flex flex-col'>
        {/* setMenuButtonState={setMenuButtonState} */}
        <Header/>
      <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/about' element={<Info/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/error-page' element={<ErrorPage/>}/>
                <Route path='/brockers-page' element={<BrockersPage/>}/>
                <Route path='/warehouses-page' element={<WarehousesPage/>}/>
            </Routes>
            <Footer/>
      </div>
      </>
  );
}

export default App;
