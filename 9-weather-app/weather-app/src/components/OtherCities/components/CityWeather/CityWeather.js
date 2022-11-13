import styled from "styled-components";
import Temperature from "../../../Temperature";
import WeatherIcon from "../../../WeatherIcon";

const Button = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  font-size: 1rem;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }

  & ~ & {
    margin-top: 0.3rem;
  }
`
const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
`
const StyledTemperature = styled(Temperature)`
  width: 3rem;
  margin-right: 1rem;
`
const StyledWeatherIcon = styled(WeatherIcon)`
  height: 50px;
  width: 50px;
`
//CityWeather里面不关心id setCityId
const CityWeather = ({
                         name,
                         temperature,
                         weather,
                         onClick,
                     }) => (
    <Button onClick={onClick}>
        <CityName>{name}</CityName>
        <StyledTemperature value={temperature}/>
        <StyledWeatherIcon
            value={weather.icon}
            description={weather.description}/>
    </Button>
)

export default CityWeather;