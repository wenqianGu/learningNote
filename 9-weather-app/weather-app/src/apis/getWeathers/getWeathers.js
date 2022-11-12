import axios from "axios";
import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getWeathers = (ids) => OpenWeatherMap.get('/group', {
    params: {
        id: ids.join(),
    }
})

export default getWeathers;

//2158177,2147714,2174003,2063523