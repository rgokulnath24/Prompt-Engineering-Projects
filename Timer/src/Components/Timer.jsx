import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timeflag, setTimeflag] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (timeflag) {
      timer.current = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer.current);
    }
    return () => clearInterval(timer.current);
  }, [timeflag]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Clock */}
      <h1 className="text-8xl font-bold mb-10 drop-shadow-2xl transition-all duration-500 ease-in-out">
        {time}
      </h1>

      {/* Button */}
      <button
        onClick={() => setTimeflag(!timeflag)}
        className={`px-10 py-4 text-xl font-semibold text-red rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 ${
          timeflag
            ? "bg-green-500 hover:bg-green-600 text-red-500"
            : "bg-red-500 hover:bg-red-600 text-green-500"
        }`}
      >
        {timeflag ? "⏸ Pause" : "▶ Resume"}
      </button>
    </div>
  );
}
