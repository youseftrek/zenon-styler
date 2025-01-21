"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  endDate: string; // ISO date string
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const now = Date.now();
    const end = new Date(endDate).getTime();
    return Math.max(end - now, 0);
  };

  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const savedEndDate = localStorage.getItem("countdownEndDate");
    if (savedEndDate) {
      const savedTimeLeft = new Date(savedEndDate).getTime() - Date.now();
      return Math.max(savedTimeLeft, 0);
    } else {
      localStorage.setItem("countdownEndDate", endDate);
      return calculateTimeLeft();
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft <= 0) {
    return (
      <div className="font-bold text-2xl text-center text-red-500">
        انتهى الوقت!
      </div>
    );
  }

  // Convert timeLeft (ms) to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-right flex justify-center gap-8">
      <AnimatedUnit label="أيام" value={days} />
      <AnimatedUnit label="ساعات" value={hours} />
      <AnimatedUnit label="دقائق" value={minutes} />
      <AnimatedUnit label="ثوانٍ" value={seconds} />
    </div>
  );
};

interface AnimatedUnitProps {
  label: string;
  value: number;
}

const AnimatedUnit: React.FC<AnimatedUnitProps> = ({ label, value }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          className="font-bold text-4xl"
          initial={{ opacity: 0, y: -20, scale: 0.8, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5,
          }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
      <div className="text-muted-foreground text-sm uppercase">{label}</div>
    </motion.div>
  );
};

export default Countdown;
