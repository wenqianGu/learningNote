import Section from '../Section'
import DailyWeather from "./components/DailyWeather";
import styled from 'styled-components';
import {useState} from "react";
import axios from "axios";

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
`

const Forecast = () => {
    const [forecast, setForecast] = useState([
        {id: 'MON', day: 'MON', temperature: '21', weather: {icon: '04d', description: 'Clouds'}},
        {id: 'TUE', day: 'TUE', temperature: '24', weather: {icon: '01n', description: 'Rain'}},
        {id: 'WED', day: 'WED', temperature: '20', weather: {icon: '01d', description: 'Clear'}},
        {id: 'THU', day: 'THU', temperature: '20', weather: {icon: '01d', description: 'Clear'}},
    ])
    return (
        <Section title="Forecast">
            <Layout>
                {forecast.map(({id, day, temperature, weather}) => (
                    <DailyWeather key={id} day={day} temperature={temperature} weather={weather}/>
                ))}
            </Layout>
        </Section>
    )
}

export default Forecast;