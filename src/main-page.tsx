import React,{useState} from 'react';
import '../src/global.css'
import Header from './components/Header';
import Numbers from './components/Numbers/Numbers';
import Footer from './components/Footer';
import MainPage from './components/Main slide/main slide';

const App: React.FC = () => {
  const [menuButtonState, setMenuButtonState] = useState<boolean>(false);

  return (
      <>
      <div className=' h-full w-full flex flex-col flex-grow-3'>
      <Header menuButtonState={menuButtonState} setMenuButtonState={setMenuButtonState}/>
          <MainPage  menuButtonState={menuButtonState}/>
          <Numbers menuButtonState={menuButtonState}/>
          <div className='border-[1px] border-red-300'></div>
          <Footer menuButtonState={menuButtonState}/>
      </div>
        
      </>
  );
}

export default App;
