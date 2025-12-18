import React, { useState } from "react";

const SumCalculator = () => {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);


  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    

    const num = Number(value);
    if (isNaN(num)) return;

    setSum(sum+num);
    
  }

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="text"
        placeholder="Enter number (+ or -)"
        
        onChange={handleChange}
      />
      <p>Sum : {sum}</p>
    </div>
  );
};

export default SumCalculator;
