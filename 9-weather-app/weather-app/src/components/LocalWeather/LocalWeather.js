//(render background image and local weather, layout of forecast and city name)

import BackgroundImage from "../BackgroundImage";
import styled from 'styled-components';
import Weather from "./components/Weather";
import CityName from './components/CityName'
import {useEffect, useState} from "react";
import axios from "axios";

const getWeather = (id) => axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
        id,
        units: 'metric',
        appid: '2466213f21b4b723d341e00a430a7673'
    }
})

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px 96px;
`
const LocalWeather = () => {
    const [data, setDate] = useState();
    // loading state确保data有数据之后，再render-Local weather页面；
    const [loading, setLoading] = useState(true);
    // 1.undefined.
    // 2.data
    console.log(data);
    // 1.执行。 第一次会执行
    // 2.第二次检查 [] dependency 发生改变？ -> useEffect不执行
    useEffect(() => {
        getWeather('2158177').then(({data}) => {
            setDate(data);
            setLoading(false);
        })
    }, [])
    if(loading){
        return (<div>loading...</div>)
    }
    //return null
    //Uncaught TypeError: Cannot read properties of undefined (reading 'main')
    // render localWeather的时候，先执行useEffect，然后继续执行return，data的值都是空的，所以返回上述错误；
    // 第一次渲染，data没有值，去取值，会继续渲染下去；等data取值成功之后，会出发re-render；useEffect不会被执行，因为dependence没有发生改变；
    return (
        <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
            <Layout>
                <Weather
                    temperature={data.main.temp}
                    mainWeather={data.weather[0].main}
                    humidity={`${data.main.humidity}%`}
                    wind={`${data.wind.speed} K/M`}/>
                <CityName name={data.name}></CityName>
            </Layout>
        </BackgroundImage>
    )
}

export default LocalWeather;