  
import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {WrapperDiv, NAV, Button, SubNav, CropDiv32, CropDiv64} from './components'

const randomKey = () => String(Math.random()).split(".")[1];

const navItem = (item) => {  
  return(
  <NavLink key={randomKey()} to={item.url} onClick={item.onClick} >
    <CropDiv64>
      <Button key={randomKey()}>{item.text}</Button>
    </CropDiv64>
  </NavLink>
  )
}

const exampleMenu = () => {
  const items = [
    {url: "/", text: <img src="/apple.svg" alt="logo" />},
    {url: "/Mac", text: "Mac"},
    {url: "/iPad", text: "iPad"},
    {url: "/iPhone", text: "iPhone"},
    {url: "/Watch", text: "Watch"},
    {url: "/TV", text: "TV"},
    {url: "/Music", text: "Music"},
    {url: "/Support", text: "Support"},
    {url: "/Search", text: (<CropDiv32> <img src="/search.svg" height="64px" alt="Search" /> </CropDiv32>)},
    {url: "/Store", text: <img src="/shop.svg" height="32px" alt="Shop" />},
  ];
  return (items.map(navItem))
}

function App() {
  const [subState, setSubState] = useState("");
  const [subContent, setSubContent] = useState([]);
  function changeState(txt){
    console.log("change state")
    setSubState(txt);
  }
  useEffect(() => {
    console.log("App.useEffect")
    setSubContent("sub content: " + subState);
  }, [subState])


  const navMenu = exampleMenu(changeState);
  return (
    <WrapperDiv>
      <div className="App">
        <header className="App-header">
          <NAV>
          {navMenu}
          </NAV>
      </header>
      <SubNav>{subContent}</SubNav>
      </div>
    </WrapperDiv>
  )
}

export default App;