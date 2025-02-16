import React, { useState, useEffect } from "react";

interface EventCountdownProps {
  registrationDeadline: string;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ registrationDeadline }) => {
  const calculateTimeRemaining = () => {
    const deadlineTime = new Date(registrationDeadline).getTime();
    const currentTime = new Date().getTime();
    const timeRemaining = deadlineTime - currentTime;

    if (timeRemaining > 24 * 60 * 60 * 1000) {
      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      return { type: "days", value: `${daysRemaining} days left` };
    } else if (timeRemaining > 0) {
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
      return { type: "countdown", value: `${hours}h ${minutes}m ${seconds}s` };
    } else {
      return { type: "expired", value: "Registration Closed" };
    }
  };

  // ✅ Corrected: Removed dependency issue
  const [timeLeft, setTimeLeft] = useState<{ type: string; value: string }>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [registrationDeadline]); // ✅ Only depend on deadline, NOT `timeLeft`

  return (
    <span className={timeLeft.type === "expired" ? "text-red-600" : "text-white"}>
      {timeLeft.value}
    </span>
  );
};

export default EventCountdown;

