import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          tickSize: 0,
        },
      ]}
      yAxis={[
        {
          tickSize: 0,
        },
      ]}
      series={[
        { data: [4, 1, 5,3.5,4,5,5,4,6], color: "#1E96FC" },
        { data: [2, 0.2, 2.2,0.8,3,2,3,2,3], color: "#09005D" },
      ]}
      width={500}
      height={300}
    />
  );
}
