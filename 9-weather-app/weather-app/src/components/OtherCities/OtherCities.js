import Section from "../Section"
import CityWeather from "./components/CityWeather";
import {useEffect, useState} from "react";
import getWeathers from "../../apis/getWeathers";

//肌肉记忆
//通过API获取数据？ loading state

//肌肉记忆
//所有动态的数据，都应该作为state 存在；除非这个数据可以通过其他state 推演而来 （衍生状态）
// otherCitiesId 是排除了 local city id的其他city id， 是衍生数据；

const OtherCities = ({
                         currentCityId,
                         setCurrentCityId,
                     }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //console.log(currentCityId, typeof currentCityId)
        const otherCitiesId = [2158177, 2147714, 2174003, 2063523]
            .filter((id) => id !== currentCityId)
        getWeathers(otherCitiesId)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
    }, [currentCityId])

    if (loading) {
        return (<div>Loading...</div>)
    }

    // console.log(data);

    return (
        <Section title="Other Cities">
            {data.list.map(({id, name, main: {temp}, weather: [weather]}) => (
                <CityWeather
                    key={id}
                    onClick={()=>setCurrentCityId(id)}
                    name={name}
                    temperature={temp}
                    weather={weather}/>
            ))}
        </Section>
    )

}
export default OtherCities;