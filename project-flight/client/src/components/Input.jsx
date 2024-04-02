import React, { useState } from 'react';

const Input = ({ text, max, value, onInputChange, id }) => {
  // error for invalid input values
  const [error, setError] = useState()

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || isNaN(inputValue)) {
        // If the input value is empty or not a number, set it to 0
        onInputChange(0);
        setError("Please enter a valid number");
    } else {
        const newValue = parseInt(inputValue);
        if (newValue < 0 || newValue > max) {
            // If the value is out of range, set an error
            setError("Value must be between 0 and " + max);
        } else {
            // Otherwise, update the input value and clear the error
            onInputChange(newValue);
            setError();
        }
    }
};


  return (
    <div className="p-4 border border-gray-300 my-3 rounded-md bg-slate-600 w-64">
      <label className="block py-4 text-sm text-black">{text}</label>
      <input
        max={max}
        type="number"
        value={value}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      {error && <h4>{error}</h4>}
    </div>
  );
}

export default Input;
