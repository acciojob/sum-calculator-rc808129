import React, { useState } from "react";

const SumCalculator = () => {
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const num = parseInt(input, 10);
      if (isNaN(num)) return;

      // ✅ safe update
      setSum(prev => prev + num);
      setInput("");
    }
  }

  return (
    <div>
      <h1>Sum Calculator</h1>

      <input
        type="text"
        placeholder="Enter number"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {/* ✅ exact text expected by test */}
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
