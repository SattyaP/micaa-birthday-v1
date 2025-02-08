import './App.css'
import 'animate.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Roulettes } from './pages/Roulettes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Home />}></Route>
        <Route path='/rouletess' element={<Roulettes />}></Route>
      </Routes>
    </Router>
  );
}

export default App
