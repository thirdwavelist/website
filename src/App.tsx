import React from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import CafeList from './components/CafeList'

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar bg="light" variant="light" sticky="top">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo72.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Third Wave List
          </Navbar.Brand>
        </Navbar>
      </div>
      <div>
        <CafeList />
      </div>
      <Navbar className="footer" bg="light" variant="light" fixed="bottom">
        <span>Copyright &copy; Antal János Monori & Kristoffer Tjalve, {new Date().getFullYear()}. All rights reserved.</span>
      </Navbar>
    </div>
  );
};

export default App;
