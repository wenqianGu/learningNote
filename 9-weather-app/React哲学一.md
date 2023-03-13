# 万能的React写法

- 八股文
- 肌肉记忆 不会浪费任何时间在基本功能上

1. 业务逻辑 （点击登录，输入账号密码，发送API 验证，登录成功，跳出成功信息， 跳转页面）
2. 代码逻辑 （任何渲染form，如果管理账户密码的输入，如何发送api，如果跳出信息）

* 用肌肉记忆去写代码

我们已经有了

- 一个返回Json的API -> Backend Developer
- 设计师提供的组件设计搞 -> Designer

### 第一步：将设计好的UI 划分为组件层级

* Sample one

- App
    - Header
    - Body
        - Left
        - Right

* 问题是：这些划分没有办法确定网站的业务是什么
* 当Naming component 的时候，可以参考API
* https://kieradog.github.io/weather-app/


- APP (render background image and layout of local weather, other cities and forecast)
    - LocalWeather (render background image and local weather, layout of forecast and city name)
        - Weather (render weather, layout of temperature, main weather, humidity and wind)
            - Temperature (render value with icon)
            - MianWeather (render value)
              Flex
            - WeatherItem (render weather item humidity layout of title and value)
              border
            - WeatherItem: render wind
        - CityName (render value and fancy border)
    - OtherCityies (render section with title and list of city weathers)
        - Section:render layout of title and list of city weathers
            - CityWeather (render city weather)
                - CityName (render value)
                - Temperature (render value with icon)
                - WeatherIcon (render image by icon value)
    - Forecast (render forecast, section with title and list of daily weathers)
        - Section:render layout of title and list of city weathers
            - DailyWeather (render daily weather)
                - Day
                - WeatherIcon (render weather image by icon value)
                - Temperature (render value with icon)

* 责任上有重复的话，做成一个component

- Temperature: 每个tempature出现之后，样式需要调用temperature的compnent层控制; stypled-component需要赋值className 才可以修改这个样式；
- WeatherIcon
- Section: layout of title and something

### 第二步：用React 创建一个静态版本

* HTML + CSS
* overflow: hidden ->溢出这个view的时候，需要滑动

### 第三步：确定UI State的最小（且完整）表示

### 第四步: 确定State放置的位置 （放置在正确的位置）

* 变量提升 state lifting
    * 在不同组件之间，copy同样的代码的时候，考虑状态提升；
* 考虑state是不是独立的
* 拿到真实数据之后，考虑下是否需要这么多state

```js
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
    // useEffect给一个空依赖，代表这个effect只会运行一次，在localWeather渲染的时候，运行一次这个useEffect；
    // 是否需要这么多的state？
    useEffect(() => {
        getWeather('2158177').then(({data}) => {
            setCityName(data.name);
            setTemperature(data.main.temp);
            setMainWeather(data.weather[0].main);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
        })
    }, [])
    return (<div/>)
};

```

* Uncaught TypeError: Cannot read properties of undefined (reading 'main')
* 最常见的error之一
* 只要获取数据，就要考虑loading的问题；
* 当做完state之后，如果用useEffect取数据的时候，就要自然而然的知道这个是异步取数据的过程；
    - 凡是异步的问题，就有异步render的过程。
    - 需要一个loading的state

```jsx
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
    if (loading) {
        return (<div>loading...</div>)
    }
    //return null
    //Uncaught TypeError: Cannot read properties of undefined (reading 'main')
    // render localWeather的时候，先执行useEffect，然后继续执行return，data的值都是空的，所以返回上述错误；
    // 第一次渲染，data没有值，去取值，会继续渲染下去；等data取值成功之后，会出发re-render；useEffect不会被执行，因为dependence没有发生改变；
    return (
        <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
            <Layout>
                <Weather/>
                <CityName name={data.name}></CityName>
            </Layout>
        </BackgroundImage>
    )
}

```

### 值的传递

* 父传子 ->通过props
* 子传父 ->回调函数传递
* 能状态提升就提升，不能提升再回调传递！

```jsx
import {useState} from "react";
//父类 接收回调函数 传递的数据 
const LocalWeather = () => {
    const [data, setData] = useState();
    return (<BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
        <Layout>
            <Weather handleWeatherData={(weatherData) => setData(data)}/>
            <CityName name={data.name}></CityName>
        </Layout>
    </BackgroundImage>)
}

// 子类 回调函数 传递state给父类
const Weather = ({
                     handleWeatherData,
                 }) => {
    const [data, setDate] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeather('2158177').then(({data}) => {
            setDate(data);
            handleWeatherData(data);
            setLoading(false);
        })
    }, []);
    return (<div></div>)
}
```

* 兄弟关系的传参
  * 提升到最小的共同component即可；
  * cityID
  * LocalWeather/Forecast -> App 

### 添加反向数据流
* 添加数据流
* 当component (CityWeather) 没有setCityId和id时，向上父类component(OtherCities/App)寻找；
* 代码优化：考虑命名是否合理；审视代码；
* setCityId -> setCurrentCityId

### 接下来需要学的内容： 路由，context，测试；