import React,{useEffect} from 'react';
import '../src/global.css'
import Header from './components/Header/Header';
import Numbers from './components/About_us/Numbers';
import Footer from './components/Footer';
import MainPage from './components/Main slide/main slide';
import Warehouses from './components/Our_warehouses/Warehouses';

const App: React.FC = () => {
  // const [menuButtonState, setMenuButtonState] = useState<boolean>(false);
  

  return (
      <>
      <div className=' h-full w-full flex flex-col flex-grow-3'>
        {/* setMenuButtonState={setMenuButtonState} */}
        <Header/>
        <MainPage/>
        <Numbers/>
        <Warehouses/>
        <Footer/>
      </div>
        
      </>
  );
}

export default App;
