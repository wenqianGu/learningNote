//(render weather, layout of tempature, main weather, humidity and wind) 
import Temperature from "../../../Temperature";
import styled from "styled-components";
import WeatherItem from "./components/WeatherItem";

const StyledTempature = styled(Temperature)`
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
   width:2px;
   background-color: rgba(255, 255, 255, 0.7);
`

const HumidityAndWind = styled.div`
  display: flex;
  margin-top: 3rem;
  color: rgba(255, 255, 255, 0.7);
`

const Weather = () => (
    <div>
        <StyledTempature value="11.84" />
        <MainWeather>Rain</MainWeather>
        <HumidityAndWind>
            <WeatherItem title="HUMIDITY">65%</WeatherItem>
            <VerticalDivider /> 
            <WeatherItem title="WIND">8.75 K/M </WeatherItem>
        </HumidityAndWind>
    </div>
)

export default Weather;