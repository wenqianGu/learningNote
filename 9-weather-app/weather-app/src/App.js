// (render 1. background image and 2. layout of local weather, other cities and forecast)
import styled from 'styled-components'
import LocalWeather from './components/LocalWeather'
import BackgroundImage from './components/BackgroundImage'
import OtherCities from './components/OtherCities'
import Forecast from './components/Forecast'
import {useState} from "react";

const Wrapper = styled(BackgroundImage)`
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Layout = styled.div`
  display: flex;
  padding: 36px 0;
`

const VerticalDivider = styled.div`
  width: 2px;
  background-color: rgba(0, 0, 0, 0.1);;
`

const Container = styled.div`
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
  background-color: white;
  width: 800px;

`

const App = () => {
    //const defaultCityId = '2158177';
    const [cityId, setCityId] = useState(2158177);
    return (
        <Wrapper src="https://wallpaperaccess.com/full/2629319.png">
            <Container>
                <LocalWeather cityId={cityId}/>
                <Layout>
                    <OtherCities
                        currentCityId = {cityId}
                        setCurrentCityId={setCityId}
                    />
                    <VerticalDivider/>
                    <Forecast cityId={cityId}/>
                </Layout>
            </Container>
        </Wrapper>
    )
}


export default App;
