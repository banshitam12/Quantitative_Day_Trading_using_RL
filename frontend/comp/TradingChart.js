import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TradingChart({ data }) {
  return (
    <div className="trading-chart">
      <h2>Trading Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="stockPrice"
            stroke="#8884d8"
            name="Stock Price"
          />
          <Line
            type="monotone"
            dataKey="modelDecision"
            stroke="#82ca9d"
            name="Model Prediction"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TradingChart;
