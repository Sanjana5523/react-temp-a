import React, { useRef } from "react";

export default function App11() {
  const textRef = useRef();
  const colorRef = useRef();
  const handleColor = () => {
    textRef.current.style.color = colorRef.current.value;
  };
  return (
    <div>
      <h1 ref={textRef}>Hello</h1>
      <input type="text" ref={colorRef} placeholder="Enter color"></input>
      <button onClick={handleColor}>Submit</button>
    </div>
  );
}
