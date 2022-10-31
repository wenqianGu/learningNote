// (render 1. background image and 2. layout of local weather, other cities and forecast)
import styled from 'styled-components'
import LocalWeather from './components/LocalWeather'
import BackgroundImage from './components/BackgroundImage'
import OtherCities from './components/OtherCities'
import Forecast from './components/Forecast'

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
 width: 3px;
 background-color: rgba(0, 0, 0, 0.1);;
`

const Container = styled.div`
border-radius: 32px;
overflow: hidden;
box-shadow: 0 0 16px rgb(0 0 0 / 50%);
background-color: white;
width: 800px;

`

const App = () => (
  <Wrapper src="https://wallpaperaccess.com/full/2629319.png">
    <Container>
      <LocalWeather/>
      <Layout>
        <OtherCities />
        <VerticalDivider />
        <Forecast/>
      </Layout>
    </Container>
  </Wrapper>
)


export default App;
