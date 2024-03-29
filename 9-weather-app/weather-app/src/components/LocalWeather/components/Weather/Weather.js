//(render weather, layout of tempature, main weather, humidity and wind) 
import Temperature from "../../../Temperature";
import styled from "styled-components";
import WeatherItem from "./components/WeatherItem";
import {useEffect, useState} from "react";
import getWeather from "../../../../apis/getWeather";

const StyledTemperature = styled(Temperature)`
  color: white;
  font-size: 5rem;
`
const MainWeather = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
`

const VerticalDivider = styled.div`
  margin: 0 2rem;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.7);
`

const HumidityAndWind = styled.div`
  display: flex;
  margin-top: 3rem;
  color: rgba(255, 255, 255, 0.7);
`

const Weather = ({
                     temperature,
                     mainWeather,
                     humidity,
                     windSpeed,
                 }) => (
    <div>
        <StyledTemperature value={temperature}/>
        <MainWeather>{mainWeather}</MainWeather>
        <HumidityAndWind>
            <WeatherItem title="HUMIDITY">{humidity}%</WeatherItem>
            <VerticalDivider/>
            <WeatherItem title="WIND">{windSpeed} K/M </WeatherItem>
        </HumidityAndWind>
    </div>
)

export default Weather;