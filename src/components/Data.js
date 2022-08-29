import React, { useEffect, useState } from "react";
import styled from 'styled-components';



function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const API_KEY = "2fce26b3009e0a66de8c0a0223800869";

  // function get temp data
  const getTempData = (api, query) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.main);
        setCity(query);
        // console.log(res.main);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };

  // call use Effect for render data every search input
  useEffect(() => {
    getTempData(API_KEY, inputValue);
  }, [inputValue]);



  return (
    <MainContainer className='main-container'>
      <input className="weather-input-city"
        type="text"
        placeholder="Enter City Name"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />

      {!inputValue.length ? null : data ? (
        <div className='main'>
          <div className="weather-p-city">The weather at : {city}</div>

          <div className="weather-information-container">
            <p >Current Temperature : {data.temp} °C</p>
            <p >Temperature Range : {data.temp_min}°C  to  {data.temp_max} °C</p>
            <p >Humidity  : {data.humidity}</p>
            <p className='p4'>Sea Level  : {data.sea_level}</p>
          </div>
          <div className='text'>
            <p>Hello! The temperature in {city} is {data.temp}ºC. Today is a good day, to have an excelent day! Take care!
            </p>
          </div>
        </div>
      ) : (
        <p className="weather-valid-city-name">Please enter valid city name</p>
      )}
    </MainContainer>
  );
}


export default Weather;

const MainContainer = styled.div`

  .main-container{
    display: flex;
    width: 100vw;
  }

  .main {
    display: flex;
    height: 75vh;
    width: 100vw;

  }

  .weather-input-city {
    width: 50vw;
    display: flex;
    position: absolute;
    background-color: black;
    color: white;
    height:  4em;
    border-radius: 4%;
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    text-align: center;
    left: 3vw;
    top: 18vh;
  }

  .weather-valid-city-name {
    width: 25vw;
    display: flex;
    margin-top: 2em;
    font-size: 25px;


  }

  .weather-p-city {
    width: 25vw;
    display: flex;
    font-size: 25px;
    position: absolute;
    top: 36vh;
    left: 13vw;
  }

  .weather-information-container {
    font-family: 'Alumni Sans Pinstripe', sans-serif;
    color: black;
    font-weight: bold;
    margin-top: 25vh;
    margin-right: 45vw;
    height: 30vh;


  }

  .weather-information-container > p {
    margin-top: 2vh;
    font-size: 30px;

  }

  .text {
    position: absolute;
    display: flex;
    top: 35vh;
    justify-content: center;
    font-size: 40px;
    text-align: center;
    right: 2vw;
    left: 55vw;
  }

  @media screen and (max-width:600px) {
    .p4 {
      display: none;
    }

    .weather-information-container > p {
      margin-top: 2vh;
    }
  }

  @media screen and (max-width:700px) {


    .main-container{
      display: flex;
      width: 100vw;
      height: 75vh;
      overflow-y: scroll;
    }

    .main {
      display: flex;
      height: 75vh;
      width: 100vw
    }

    .weather-input-city {
      top: 15vh;
    }

    .weather-valid-city-name {
      width: 80vw;
      display: flex;
      margin-top: 2em;
      font-size: 25px;
    }

    .weather-p-city {
      width: 100vw;
      display: flex;
      font-size: 25px;
      position: absolute;
      top: 33vh;
      left: 0;
      justify-content: center;
    }

    .weather-information-container {
      font-family: 'Alumni Sans Pinstripe', sans-serif;
      font-size: 25px;
      color: black;
      font-weight: bold;
      margin-left: 10vw;
      width: 100vw;
      margin-top: 10vh;
      margin-bottom: 5vh;
    }
    .weather-information-container > p {
      font-size: 26px;
    }
    .text {
      display: none;
    }
  }
    @media screen and (orientation:landscape) and (max-width:900px)  {



      .weather-input-city {
        height: 7vh;
      }

      .weather-valid-city-name {
        width: 50vw;
      }
      .weather-p-city {
        font-size: 20px;
        top: 28vh;
      }

      .text {
        display: flex;
        font-size: 25px;
        top: 40vh;
      }

      .weather-information-container > p {
        font-size: 18px;
        margin-top: 0;
      }

    }

    @media screen and (max-height:700px) {
      .weather-information-container {
        font-size: 20px;
      }
    }

`
