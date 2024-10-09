import './App.css';
import EinkaufsListePage from './view/pages/EinkaufsListePage.tsx';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ImpressumPage from './view/pages/ImpressumPage.tsx';
import NavBar from './view/components/Navbar.tsx';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact Component={EinkaufsListePage}/>
        <Route path='/impressum' Component={ImpressumPage}/>
      </Routes>
    </Router>
  );
}

export default App;
