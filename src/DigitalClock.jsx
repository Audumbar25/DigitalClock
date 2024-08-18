import {useState,useEffect} from 'react'
import './style.css';
const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);
    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;

        
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    function getDay() {
        let day = time.getDay();
          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          return daysOfWeek[day];
    }

    function getMonth() {
        let month = time.getMonth();
        let year = time.getFullYear();
        const monthsOfYear = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
        ];
        return {
            month: monthsOfYear[month],
            year: year
        };
    }
  return (
      <div className='clock-container'>
          <div className='clock'>
              <span>{getDay()}</span>
              <br/>
              <span>{formatTime()}</span>
              <br />
              <span>{getMonth().month} {getMonth().year}</span>
          </div>
    </div>
  )
}

export default DigitalClock