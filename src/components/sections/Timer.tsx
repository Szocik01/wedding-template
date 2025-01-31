import { useEffect, useState } from "react";

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timer = () => {
  const targetDate = new Date("2025-08-23T14:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  function getHourString(hours: number) {
    if (hours === 1) {
      return "godzina";
    } else if (hours >= 2 && hours <= 4) {
      return "godziny";
    } else {
      return "godzin";
    }
  }

  function getMinuteString(minutes: number) {
    if (minutes === 1) {
      return "minuta";
    } else if (minutes >= 2 && minutes <= 4) {
      return "minuty";
    } else {
      return "minut";
    }
  }

  function getSecondString(seconds: number) {
    if (seconds === 1) {
      return "sekunda";
    } else if (seconds >= 2 && seconds <= 4) {
      return "sekundy";
    } else {
      return "sekund";
    }
  }
  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-entry remaining decorative">
          Do dnia ślubu pozostało
        </div>
        <div className="timer-entry">
          <span className="decorative">{timeLeft.days}</span> dni
        </div>
        <div className="timer-entry">
          <span className="decorative">{timeLeft.hours}</span>
          {getHourString(timeLeft.hours)}
        </div>
        <div className="timer-entry">
          <span className="decorative">{timeLeft.minutes}</span>
          {getMinuteString(timeLeft.minutes)}
        </div>
        <div className="timer-entry">
          <span className="decorative">{timeLeft.seconds}</span>
          {getSecondString(timeLeft.seconds)}
        </div>
      </div>
    </div>
  );
};

export default Timer;
