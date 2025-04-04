import React from "react";
import { useNavigate } from "react-router-dom";
export default function App13() {
  const navigate = useNavigate();

  const showApp = () => {
    navigate("/app10");
  };
  return (
    <div>
      <h2>This is App13</h2>
      <button onClick={showApp}>App 10</button>
    </div>
  );
}
