import Section from "../Section"
import CityWeather from "./components/CityWeather";


const OtherCities = () => (
    <Section title="Other Cities">
    <CityWeather name="Melbourne" temperature ="21" weather={{icon:'04d', description:'Clouds'}}/>
    <CityWeather name="Sydney" temperature ="24" weather={{icon:'01n', description:'Rain'}} />
    <CityWeather name="Perth" temperature ="20" weather={{icon:'01d', description:'Clear'}} />
    <CityWeather name="Brisbane" temperature ="28" weather={{icon:'11d', description:'Thunderstorm'}} />
    </Section>
    

)

export default OtherCities;