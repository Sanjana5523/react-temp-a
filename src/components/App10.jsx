import React, { useState, useEffect, useRef } from "react";
import "./App10.css";

export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  const prevRun = useRef(0);
  const prevWicket = useRef(0);

  useEffect(() => {
    prevRun.current = run;
    prevWicket.current = wicket;
  }, [run, wicket]);

  useEffect(() => {
    if (wicket === 10) {
      setMsg("Game Over!");
    } else if (wicket > 0) {
      setMsg("Better luck next time!");
    }
  }, [wicket]);

  const handleRun = (runs) => {
    setRun((prevRun) => prevRun + runs);
    setMsg("Well Done!");
  };

  const handleWicket = () => {
    if (wicket < 10) {
      setWicket((prevWicket) => prevWicket + 1);
    }
  };

  return (
    <div className="container">
      <div className="score-section">
        <h2 className="runs">Total Runs: {run}</h2>
        <h2 className="wickets">Total Wickets: {wicket}</h2>
      </div>
      <div className="button-section">
        <button onClick={() => handleRun(1)} className="run-button">
          1 Run
        </button>
        <button onClick={() => handleRun(2)} className="run-button">
          2 Runs
        </button>
        <button onClick={() => handleRun(4)} className="run-button">
          4 Runs
        </button>
        <button onClick={() => handleRun(6)} className="run-button">
          6 Runs
        </button>
        <button onClick={handleWicket} className="wicket-button">
          Wicket
        </button>
      </div>
      <h3 className="message">{msg}</h3>
    </div>
  );
}
