import React from 'react';
import styled from 'styled-components';
import Weather from './Data';
import clima from '../media/clima.png';
import nube from '../media/nube2.png';



const Main = () => {
  return(
    <MainContainer>
      <div className='main'>
          <img src={clima} alt='' className='clima' />
          <img src={nube} alt='' className='nube1' />
          <img src={nube} alt='' className='nube2' />
          <img src={nube} alt='' className='nube3' />
          <img src={nube} alt='' className='nube4' />
          <Weather />
      </div>
    </MainContainer>
  )
}

export default Main;

const MainContainer = styled.div`

  .main {
    height: 75vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    overflow: hidden;

  }

  .clima {
    position: absolute;
    display: flex;
    width: 10vw;
    left: 80vw;
    top: 12vh;
  }

  .nube1 {
    display: flex;
    position: absolute;
    opacity: .2;
    animation: wind1 9s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-top: -15vh;
  }

  .nube2 {
    display: flex;
    position: absolute;
    opacity: .2;
    animation: wind2 12s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-top: -8vh;
  }

  .nube3 {
    display: flex;
    position: absolute;
    opacity: .2;
    animation: wind3 8.2s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-top: 35vh;
  }

  .nube4 {
    display: flex;
    position: absolute;
    opacity: .2;
    animation: wind4 7s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-top: 10vh;
  }

  @keyframes wind1 {
    from {
      margin-left: -30px;
    }

    to {
      margin-left: 500px;
    }

  }

  @keyframes wind2 {
    from {
      margin-left: -400px;
    }

    to {
      margin-left: 600px;
    }

  }

  @keyframes wind3 {
    from {
      margin-left: 30px;
    }

    to {
      margin-left: 700px;
    }

  }

  @keyframes wind4 {
    from {
      margin-left: 300px;
    }

    to {
      margin-left: -290px;
    }

  }

  @media screen and (max-width:700px) {
    .clima {
      width: 18vw;
      margin-top: 2vh;
    }
  }






`
