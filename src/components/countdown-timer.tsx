import { calculateTimeToEvent } from "@/utils/countdown-util";
import { type Framework } from "@/utils/framework-util";
import { useState, useEffect } from "react";
import { TimeUnit } from "./time-unit";
export const CountDownTimer = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  const [countdown, setCountdown] = useState(calculateTimeToEvent());
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-[10px] text-center">
      <TimeUnit
        label="days"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="hours"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="minutes"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="seconds"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
  );
};
