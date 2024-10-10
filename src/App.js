import './App.css';
import MainPage from './view/pages/MainPage.tsx';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ImpressumPage from './view/pages/ImpressumPage.tsx';
import NavBar from './view/components/Navbar.tsx';
import EinkaufsListenComponent from './view/components/EinkaufsListenComponent.tsx';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={MainPage}/>
        <Route path='/impressum' Component={ImpressumPage}/>
        <Route path='/test' Component={EinkaufsListenComponent} /> 
      </Routes>
    </Router>
  );
}

export default App;
