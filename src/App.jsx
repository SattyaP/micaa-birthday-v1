import './App.css';
import 'animate.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { Roulettes } from './pages/Roulettes';
import UnsupportedDevice from './pages/UnsupportedDevice';

function App() {
  const [isUnsupported, setIsUnsupported] = useState(false);

  const checkDeviceSupport = () => {
      const isDesktop = window.innerWidth >= 1024;
      const isMacOrWindows = /Mac|Win/.test(navigator.platform);
      setIsUnsupported(!isDesktop || !isMacOrWindows);
  };

  useEffect(() => {
      checkDeviceSupport(); 

      window.addEventListener('resize', checkDeviceSupport); 

      return () => {
          window.removeEventListener('resize', checkDeviceSupport); 
      };
  }, []);

    return (
        <Router>
            <Routes>
                {isUnsupported ? (
                    <Route path="*" element={<UnsupportedDevice />} />
                ) : (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/rouletess" element={<Roulettes />} />
                        <Route path="*" element={<Home />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}

export default App;
