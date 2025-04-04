import React, { useState, useEffect } from 'react';
export default function App9() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const [up, setUpdate] = useState(0);
 
  useEffect(() => {
    setTotal(num1+num2);
  }, [num1]);
  useEffect(() => {
    setTotal(num1*num2);
  }, [num2]);

  return (
    <div>
      <input type="number"  placeholder="Enter" onChange={(event) => setNum1(Number(event.target.value))} />
      <input type="number" placeholder="Enter" onChange={(event) => setNum2(Number(event.target.value))} />
      <hr />
      <h3>Total Sum: {total}</h3>
    </div>
  );
}