import {addDays, eachDayOfInterval} from "date-fns";

const toDailyForecast = (cnt = 5, forecast) => {
    const today = new Date()
    console.log(`today:${today}`);
    const days = eachDayOfInterval({
        start: today,
        end: addDays(today, cnt)
    })

    const daysTimestamp = days.map((day) => day.getTime());
    console.log(`days:${days}`);
    console.log(`daysTimestamp:${daysTimestamp}`);

    return forecast.filter(({dt}) => daysTimestamp.includes(dt * 1000))
}

export default toDailyForecast;