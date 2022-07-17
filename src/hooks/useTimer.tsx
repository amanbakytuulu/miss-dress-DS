import React, { useEffect, useState } from "react";

import { getPadTime } from "../utils/helpers/getPadTime";

export const useTimer = (time: number) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isCounting, setIsCounting] = useState(true);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  // @ts-ignore
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);
  return { minutes, seconds };
};
