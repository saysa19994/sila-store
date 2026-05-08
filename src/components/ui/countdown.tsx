"use client";

import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-xl font-bold">
      <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center">
        {String(time.hours).padStart(2, "0")}
      </div>
      <span className="text-primary">:</span>
      <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center">
        {String(time.minutes).padStart(2, "0")}
      </div>
      <span className="text-primary">:</span>
      <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center">
        {String(time.seconds).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Countdown;
