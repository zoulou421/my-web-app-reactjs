import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-5">
          <ul className="navbar-nav">
              <li><Link className="nav-link" to="/home">Home</Link></li>
              <li><Link className="nav-link" to="/counter">Counter</Link></li>
              <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li> <Link className="nav-link" to="/about">About</Link></li>
           </ul>
      </nav>
      <div className="container">
         <Routes>
             <Route path="/home" element={<Home />}/>
             <Route path="/counter" element={<Counter />}/>
             <Route path="/gallery" element={<Gallery />}/>
             <Route path="/about" element={<About />}/>
         </Routes>
      </div>
    </Router>
  );
}
export default App;
