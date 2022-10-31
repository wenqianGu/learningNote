//(render background image and local weather, layout of forecast and city name)

import BackgroundImage from "../BackgroundImage";
import styled from 'styled-components';
import Weather from "./components/Weather";
import CityName from './components/CityName'


const Layout = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 64px 96px;
`

const LocalWeather = () => (
    <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
        <Layout>
            <Weather/> 
            <CityName name="Melbourne"></CityName>
        </Layout>
    </BackgroundImage>
)

export default LocalWeather;