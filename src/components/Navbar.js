import React from 'react';
import styled from 'styled-components';
import nube from '../media/nube.png';

const Navbar = () => {
  return(
    <MainContainer>
      <div className='navbar'>
        <img src={nube} alt='' className='nube' />
        <h1 className='titulo'>Weather</h1>
      </div>
    </MainContainer>
  )
}

export default Navbar;

const MainContainer = styled.div`
  .navbar {
    height: 12vh;
    background-color: black;
    display: flex;
  }
  .titulo {
    color: white;
    display: flex;
    font-size: 50px;
    justify-content: center;
    width: 100vw;
    margin-top: 1.5vh;
    font-family: 'DynaPuff', cursive;
  }

  .nube {
    display: flex;
  }

  @media screen and (orientation:landscape) and (max-width:900px)  {
    .titulo {
      font-size: 25px;
    }
  }

`
