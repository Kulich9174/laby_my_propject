import React,{useState} from 'react';
import '../src/global.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/main slide';

const App: React.FC = () => {
  const [menuButtonState, setMenuButtonState] = useState<boolean>(false);
  // const [footerSize, setFooterSize] = useState<number>(0);

  return (
      <>
          <Header menuButtonState={menuButtonState} setMenuButtonState={setMenuButtonState}  /*footerSize={footerSize}*//>
          <MainPage  menuButtonState={menuButtonState}/>
          <Footer menuButtonState={menuButtonState} /*setFooterSize={setFooterSize}*//>
      </>
  );
}

export default App;
