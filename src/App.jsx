import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  let handleIncrease = () => {
    let inputNumber = parseInt(inputValue);
    if (!inputNumber) {
      inputNumber = 1;
    }
    if (inputNumber < 0) {
      inputNumber = inputNumber * -1;
    }

    setCount(count + inputNumber);
  };
  let handleReset = () => {
    setCount(0);
    setInputValue("");
  };
  let handleDecrease = () => {
    let inputNumber = parseInt(inputValue);
    if (!inputNumber) {
      inputNumber = 1;
    }
    setCount(count - inputNumber);
  };

  return (
    <>
      <h1
        className={`text-8xl text-green-700 font-semibold capitalize mt-10 border-8 border-double border-green-500 pb-5 px-5 block text-center mx-auto`}
      >
        simple counter app
      </h1>
      <div className="w-[500px] px-6 py-5 border-2 border-red-300 shadow-2xl rounded-lg mt-20 mx-auto">
        <h2
          className={`${count > 0 ? "text-green-700" : ""} ${
            count < 0 ? "text-red-700" : ""
          } text-center text-9xl mb-20`}
        >
          {count}
        </h2>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleIncrease}
            className=" px-6 py-2 rounded-lg text-2xl font-semibold text-white capitalize bg-green-700 cursor-pointer hover:bg-green-500 duration-300"
          >
            increase
          </button>
          <button
            onClick={handleReset}
            className=" px-6 py-2 rounded-lg text-2xl font-semibold text-white capitalize bg-blue-700 cursor-pointer hover:bg-blue-500 duration-300"
          >
            Reset
          </button>
          <button
            onClick={handleDecrease}
            className=" px-6 py-2 rounded-lg text-2xl font-semibold text-white capitalize bg-red-700 cursor-pointer hover:bg-red-500 duration-300"
          >
            decrease
          </button>
        </div>
        <div className="flex justify-center">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            className="border-2 border-cyan-600 rounded-lg px-3 py-2 w-70 capitalize  font-semibold placeholder:text-lg placeholder:text-amber-950"
            placeholder="Inter your count number"
          />
        </div>
      </div>
    </>
  );
}

export default App;
