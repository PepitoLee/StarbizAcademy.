import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  variant?: 'tech' | 'warm';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  labels,
  variant = 'tech'
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const timeUnits = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds }
  ];

  const techStyles = {
    container: 'bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border-brand-cyan/30',
    number: 'text-brand-cyan',
    glow: 'shadow-[0_0_30px_rgba(0,240,255,0.3)]',
    label: 'text-gray-400'
  };

  const warmStyles = {
    container: 'bg-gradient-to-br from-brand-orange/10 to-amber-500/10 border-brand-orange/30',
    number: 'text-brand-orange',
    glow: 'shadow-[0_0_30px_rgba(255,107,0,0.3)]',
    label: 'text-gray-400'
  };

  const styles = variant === 'tech' ? techStyles : warmStyles;

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`
            relative flex flex-col items-center justify-center
            w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28
            rounded-xl border backdrop-blur-sm
            ${styles.container} ${styles.glow}
          `}
        >
          {/* Animated background pulse */}
          <motion.div
            className={`absolute inset-0 rounded-xl ${variant === 'tech' ? 'bg-brand-cyan/5' : 'bg-brand-orange/5'}`}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Number */}
          <motion.span
            key={unit.value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`
              relative z-10 font-display font-bold
              text-2xl sm:text-3xl md:text-4xl
              ${styles.number}
            `}
          >
            {formatNumber(unit.value)}
          </motion.span>

          {/* Label */}
          <span className={`
            relative z-10 text-xs sm:text-sm uppercase tracking-wider mt-1
            ${styles.label}
          `}>
            {unit.label}
          </span>

          {/* Corner decorations for tech variant */}
          {variant === 'tech' && (
            <>
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-cyan/50 rounded-tl" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-cyan/50 rounded-tr" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-cyan/50 rounded-bl" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-cyan/50 rounded-br" />
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
