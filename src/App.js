import './locomotive-scroll.css'
import './App.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <BrowserRouter>
        <nav>
          <h1>A.B</h1>
          <ul>
            <li className="nav-links"><Link to="/">Home</Link></li>
            <li className="nav-links"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={Home}>
          </Route>
          <Route path="/contact" Component={Contact}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
