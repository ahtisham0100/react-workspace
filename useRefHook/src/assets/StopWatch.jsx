import { useState, useRef } from "react";

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [timeNow, setTimeNow] = useState(null);
  const [isRunning, setIsRunning] = useState(false); // ✅ used to enable/disable Start button
  const intervalRef = useRef(null);

  function handleStart() {
    if (intervalRef.current != null) return; // prevent multiple intervals

    const now = Date.now();
    setStartTime(now);
    setTimeNow(now);
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeNow(Date.now());
    }, 10);
  }

  function handlestop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false); // ✅ enables Start button again
  }

  function handleReset() {
    const now = Date.now();
    setStartTime(now);
    setTimeNow(now);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false); // ✅ reset also enables Start
  }

  const secondsPassed =
    startTime && timeNow ? ((timeNow - startTime) / 1000).toFixed(2) : "0.00";

  return (
    <>
      <h2>{secondsPassed}s</h2>
      <button onClick={handleStart} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={handlestop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default StopWatch;
