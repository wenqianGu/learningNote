import Section from '../Section';
import {getDay} from "date-fns";
import DailyWeather from "./components/DailyWeather";
import styled from 'styled-components';
import {useEffect, useState} from "react";
import get3HourForecast from "../../apis/get3HourForecast";

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
`
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const Forecast = ({
                      cityId,
                  }) => {
    // const [forecast, setForecast] = useState([
    //     {id: 'MON', day: 'MON', temperature: '21', weather: {icon: '04d', description: 'Clouds'}},
    //     {id: 'TUE', day: 'TUE', temperature: '24', weather: {icon: '01n', description: 'Rain'}},
    //     {id: 'WED', day: 'WED', temperature: '20', weather: {icon: '01d', description: 'Clear'}},
    //     {id: 'THU', day: 'THU', temperature: '20', weather: {icon: '01d', description: 'Clear'}},
    // ])

    const [data, setDate] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get3HourForecast(cityId).then((res) => {
            setDate(res.data)
            setLoading(false)
        })
    }, [cityId])

    if (loading) {
        return (<div>Loading</div>)
    }


    // console.log(data);
    // console.log(data.list.filter(({dt_txt}) => dt_txt.endsWith('00:00:00')))
    const forecast = data.list.filter(({dt_txt}) => dt_txt.endsWith('00:00:00'));

    return (
        <Section title="Forecast">
            <Layout>
                {forecast.map(({dt, dt_txt, main: {temp}, weather: [weather]}) => (
                    <DailyWeather
                        key={dt}
                        day={DAYS[getDay(new Date(dt * 1000))]}
                        temperature={temp}
                        weather={weather}/>
                ))}
            </Layout>
        </Section>
    )
}

export default Forecast;