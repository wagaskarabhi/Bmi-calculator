import React, { useState } from "react";
import "./BMICalculator.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const onChangeWeight = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);
  };

  const [height, setHeight] = useState("");
  const onChangeHeight = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);
  };

  const [bmi, setBmi] = useState();
  const calculate = () => {
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);
    const roundResult = parseFloat(result.toFixed(2));
    setBmi(roundResult);
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 25) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  };

  const isSubmitDisabled = weight <= 0 || height <= 0;
  const isClearDisabled = !weight && !height;

  const clearInputs = () => {
    setWeight("");
    setHeight("");
    setBmi(undefined);
  };

  return (
    <>
      <div className="content-div">
        <div>
          <h1>BMI (Body Mass Index) Calculator</h1>
          <div>
            <input
              type="number"
              step="0.001"
              placeholder="Enter Weight (Kg)"
              value={weight}
              onChange={onChangeWeight}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Height (Cm)"
              value={height}
              onChange={onChangeHeight}
            />
          </div>
          <div>
            <button onClick={calculate} disabled={isSubmitDisabled}>
              Submit
            </button>
          </div>
          <div>
            <button onClick={clearInputs} disabled={isClearDisabled}>
              Clear
            </button>
          </div>
          <div>
            {bmi !== undefined && (
              <>
                <h2>Your BMI is: {bmi}</h2>
                <h2>Category: {getBmiCategory(bmi)}</h2>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
