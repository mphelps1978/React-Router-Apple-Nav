import styled from 'styled-components';

import './index.css';

const WrapperDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const H1 = styled.h1`
  font-family: Fira Code, monospace;
  letter-spacing: .2rem;
`
const Button = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
    padding: .2rem 1.5rem;
    letter-spacing: .1rem
    font-size: .8rem;
    background-color: #282c34;
    border: none;
    color: white;
    :hover {
      text-shadow:#FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px;
    }
    :active {
      text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px;
    }
`;

const NAV = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
      width: 65rem;
    background-color: #282c34;
`;

const SubNav = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    min-height: 10vh;
    border: 1px solid black;
`;
const CropDiv32 = styled.div`
  max-height: 32px;
  overflow: hidden;
  :hover {
  }
`
const CropDiv64 = styled.div`
  display: flex;
  min-height: 64px;
  overflow: hidden;
  :hover {
  }
`

export {WrapperDiv, H1, NAV, Button, SubNav, CropDiv32, CropDiv64}