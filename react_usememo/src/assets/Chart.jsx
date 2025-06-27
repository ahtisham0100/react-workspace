   
import React, { useMemo, useState } from "react";
import Chart from "./Chart"; // assume it's a memoized chart

function GraphChart() {
 

const [theme, setTheme] = useState("blue");

  const chartConfig = useMemo(() => {
    return {
      type: "bar",
      color: theme,
    };
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme((prev) => (prev === "blue" ? "green" : "blue"))}>
        Toggle Theme
      </button>

      <Chart config={chartConfig} />
    </div>
  );

} 


export default GraphChart;