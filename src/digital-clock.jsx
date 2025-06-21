import { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  console.log(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleTime() {
    let hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meninium = hour < 12 ? "PM" : "AM";

    hour = hour % 12 || 12;
    return `${finalTime(hour)}:${finalTime(minute)}:${finalTime(
      second
    )}:${meninium}`;
  }

  function finalTime(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="digital-container">
        <div className="cont">
          <span>{handleTime()}</span>
        </div>
      </div>
    </>
  );
}
export default DigitalClock;
