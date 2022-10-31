const WeatherIcon = ({
    value,
    description,
    className
}) => (
    <img className={className} alt={description} src={`https://openweathermap.org/img/wn/${value}@2x.png`} />
)

export default WeatherIcon;