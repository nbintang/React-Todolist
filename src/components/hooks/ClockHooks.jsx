import { useState, useEffect } from "react";

export default function Clock({ className }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString("id-ID"));
  useEffect(() => {
    const timer = setInterval(() => {
      const thisTime = new Date()
      setTime(thisTime.toLocaleTimeString("id-ID"))
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return <h1 className={className}>{time.toString().replaceAll(".", ":")}</h1>
}

