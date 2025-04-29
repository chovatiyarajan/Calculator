import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        // Replace × and ÷ with valid operators
        const sanitized = input.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(sanitized);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else if (value === "%") {
      try {
        const result = eval(input) / 100;
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "AC",
    "DEL",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="flex justify-center mt-10">
      <div className="w-150 bg-black opacity-90 rounded-4xl px-2 ">
        <div className="w-full mt-10 mb-20">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full h-20 text-right border-2 border-amber-500 text-amber-50 text-6xl rounded-3xl bg-black"
          />
        </div>
        <div className="grid grid-cols-4 text-center text-amber-50 gap-3 my-5">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(btn)}
              className={`
                py-5 text-2xl rounded-full
                ${
                  btn === "AC" || btn === "DEL" || btn === "%"
                    ? "bg-gray-300 text-black"
                    : ""
                }
                ${
                  ["÷", "×", "-", "+", "="].includes(btn)
                    ? "bg-orange-400 text-white"
                    : ""
                }
                ${
                  !["AC", "DEL", "%", "÷", "×", "-", "+", "="].includes(btn)
                    ? "bg-gray-600"
                    : ""
                }
                ${btn === "0" && index === 16 ? "col-span-2" : ""}
                ${
                  ["÷", "×", "-", "+", "="].includes(btn)
                    ? "hover:bg-orange-500"
                    : ""
                }
                ${
                  btn === "AC" || btn === "DEL" || btn === "%"
                    ? "hover:bg-amber-50"
                    : ""
                }
                ${
                  [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    ".",
                  ].includes(btn)
                    ? "hover:bg-gray-500"
                    : ""
                }
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
