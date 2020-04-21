import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import logo from './logo.svg';
import { WrapperDiv, NAV, Button, SubNav, CropDiv32, CropDiv64 } from './components'


const randomKey = () => String(math.random()).split('.')[1]

const navItem = (item) => {
  return(
    <NavLink key={randomKey()} to={item.url} onClick={item.onClick} >
      <CropDiv64>
        <Button key={randomKey()}>item.text</Button>
      </CropDiv64>
    </NavLink>
  )
}

const basicMenu = () => {
  const items = [
  {url: '/', text: <img src = '/apple.svg' alt='logo'/>},
  {url: '/Mac', text: "Mac"},
  {url: '/iPad', text: "iPad"},
  {url: '/iPhone', text: "iPhone"},
  {url: '/Watch', text: "Watch"},
  {url: '/TV', text: "TV"},
  {url: '/Music', text: "Music"},
  {url: '/Support', text: "Support"},
  {url: '/Search', text: "Search"},
  {url: '/Store', text: "Store"},


  ]
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
