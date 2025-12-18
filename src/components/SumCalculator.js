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
      <input
        type="text"
        placeholder="Enter number (+ or -)"
        
        onChange={handleChange}
      />
      <h2>Sum : {sum}</h2>
    </div>
  );
};

export default SumCalculator;
