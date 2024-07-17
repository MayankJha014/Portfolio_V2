import React from "react";

const Snowfall = () => {
  const snowflakes = Array.from({ length: 50 }).map((_, i) => {
    const size = `${(Math.random() * 5 * 0.2).toFixed(2)}vw`;
    const leftIni = `${(Math.random() * 20 - 10).toFixed(2)}vw`;
    const leftEnd = `${(Math.random() * 20 - 10).toFixed(2)}vw`;
    const left = `${Math.random() * 100}vw`;
    const duration = `${(5 + Math.random() * 10).toFixed(2)}s`;
    const delay = `-${(Math.random() * 10).toFixed(2)}s`;

    const style = {
      "--size": size,
      "--left-ini": leftIni,
      "--left-end": leftEnd,
      left: left,
      animation: `snowfall ${duration} linear infinite`,
      animationDelay: delay,
      filter: i % 6 === 0 ? "blur(1px)" : "none",
    };

    return <div key={i} className="snowflake" style={style}></div>;
  });

  return <div className="snowfall-container">{snowflakes}</div>;
};

export default Snowfall;
