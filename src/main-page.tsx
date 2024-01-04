import React,{useEffect} from 'react';
import '../src/global.css'
import Header from './components/Header/Header';
import Numbers from './components/About_us/Numbers';
import Footer from './components/Footer';
import MainPage from './components/Main slide/main slide';
import Warehouses from './components/Our_warehouses/Warehouses';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
const App: React.FC = () => {
  // const [menuButtonState, setMenuButtonState] = useState<boolean>(false);
  const headerstatevalue = useSelector((state: RootState)=>state.headerMenuState.value);

  // useEffect(()=>{
  //   console.log(headerstatevalue)
  // })
  return (
      <>
      <div className=' h-full w-full flex flex-col flex-grow-3'>
        {/* setMenuButtonState={setMenuButtonState} */}
      <Header menuButtonState={headerstatevalue}/>
          <MainPage  menuButtonState={headerstatevalue}/>
          <Numbers menuButtonState={headerstatevalue}/>
          <Warehouses menuButtonState={headerstatevalue}/>
          {/* <div className='border-[1px] border-red-300'></div> */}
          <Footer menuButtonState={headerstatevalue}/>
      </div>
        
      </>
  );
}

export default App;
