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