import React from "react";

const perf = {
  previous_total_asset: 100000,
  end_total_asset: 105236,
  total_reward: 5236,
  total_cost: 229,
  total_trades: 39,
};

function PerformanceMetrics() {
  return (
    <div className="performance-metrics">
      <h2>Performance Metrics</h2>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Previous Total Asset</h3>
          <p className="metric-value">
            ${perf.previous_total_asset.toLocaleString()}
          </p>
        </div>

        <div className="metric-card">
          <h3>End Total Asset</h3>
          <p className="metric-value">
            ${perf.end_total_asset.toLocaleString()}
          </p>
        </div>

        <div className="metric-card">
          <h3>Total Reward</h3>
          <p className="metric-value">${perf.total_reward.toLocaleString()}</p>
        </div>

        <div className="metric-card">
          <h3>Total Cost</h3>
          <p className="metric-value">${perf.total_cost.toLocaleString()}</p>
        </div>

        <div className="metric-card">
          <h3>Total Trades</h3>
          <p className="metric-value">{perf.total_trades}</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceMetrics;
