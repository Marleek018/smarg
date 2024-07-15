import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["Jan", "Feb", "Mar", "Apr","May", "Jun","Jul","Aug","Sep"] }]}
      series={[{ data: [1, 6, 3,] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}
