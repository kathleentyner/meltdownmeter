import React from "react";
import { useState } from "react";

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const Step = () => {
  const [value, setValue] = useState(0)
  return (
    <div className="steps-container">
      {levels.map((step, index) => {
        let color = value === index ? "#00d4ff" : "black";
  
        return (
          <div className="level-item">
            <h3
              style={{
                margin: 0,
                color: color
              }}
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
export default Step;