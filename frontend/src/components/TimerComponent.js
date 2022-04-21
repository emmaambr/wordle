import { useEffect, useState } from "react";
import "../css/Timer.css";

function Timer() {
    const [gameTime, setGameTime] = useState(null);
    const [now, setNow] = useState(null);

    useEffect(() => {
        setGameTime(new Date());
        setNow(new Date());
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNow(new Date());
        }, 1000);

        return () => clearTimeout(timer);
    }, [now]);

    if (gameTime && now) {
        const milliseconds = now.getTime() - gameTime.getTime();
        const seconds = Math.round(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const secondsOnMinute = seconds % 60;

        return (
            <h2 className="timer">
                {minutes.toString().padStart(2, "0")}:
                {secondsOnMinute.toString().padStart(2, "0")}
            </h2>
        );
    } else {
        return <h2 className="timer">00:00</h2>;
    }
};

export default Timer;