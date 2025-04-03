import React, { useState } from "react";

function ModelControls({ onRun }) {
  const [lookbackPeriod, setLookbackPeriod] = useState(10);
  const [learningRate, setLearningRate] = useState(0.001);
  const [algorithm, setAlgorithm] = useState("reinforcement");
  const [riskTolerance, setRiskTolerance] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRun({
      lookbackPeriod,
      learningRate,
      algorithm,
      riskTolerance,
    });
  };

  return (
    <div className="model-controls">
      <h2>Model Parameters</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lookback">Lookback Period:</label>
          <input
            type="number"
            id="lookback"
            value={lookbackPeriod}
            onChange={(e) => setLookbackPeriod(Number(e.target.value))}
            min="1"
            max="30"
          />
        </div>

        <div className="form-group">
          <label htmlFor="learningRate">Learning Rate:</label>
          <input
            type="number"
            id="learningRate"
            step="0.0001"
            value={learningRate}
            onChange={(e) => setLearningRate(Number(e.target.value))}
            min="0.0001"
            max="0.1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="algorithm">Algorithm Type:</label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="reinforcement">Reinforcement Learning</option>
            <option value="lstm">LSTM</option>
            <option value="transformer">Transformer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="riskTolerance">Risk Tolerance:</label>
          <select
            id="riskTolerance"
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="run-button">
          Run Model
        </button>
      </form>
    </div>
  );
}

export default ModelControls;
