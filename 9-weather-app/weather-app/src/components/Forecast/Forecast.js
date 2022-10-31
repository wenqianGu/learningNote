import Section from '../Section'
import DailyWeather from "./components/DailyWeather";
import styled from 'styled-components';

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
  
`

const Forecast = () => (
    <Section title="Forecast">
        <Layout>
            <DailyWeather day="MON" temperature ="21" weather={{icon:'04d', description:'Clouds'}}/>
            <DailyWeather day="TUE" temperature ="21" weather={{icon:'01n', description:'Rain'}}/>
            <DailyWeather day="WED" temperature ="21" weather={{icon:'04d', description:'Clouds'}}/>
            <DailyWeather day="THU" temperature ="21" weather={{icon:'04d', description:'Clouds'}}/>
        </Layout>
    </Section>
)

export default Forecast;