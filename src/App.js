import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [size, setSize] = useState(3);
  const [magicSquare, setMagicSquare] = useState([]);

  useEffect(() => {
    console.log(size);
    setMagicSquare(Array.from({ length: size }, () => Array(size).fill()));
  }, [size]);

  const handleCalculate = () => {
    let n = size;

    let magicSquare = Array.from({ length: n }, () => Array(n).fill(0));

    let num = 1;
    let i = 0;
    let j = Math.floor(n / 2);

    const updateMagicSquare = () => {
      if (num <= n * n) {
        magicSquare[i][j] = num;
        num++;

        let newI = i - 1;
        let newJ = j + 1;

        if (newI < 0) {
          newI = n - 1;
        }
        if (newJ === n) {
          newJ = 0;
        }

        if (magicSquare[newI][newJ] !== 0) {
          i++;
        } else {
          i = newI;
          j = newJ;
        }

        setMagicSquare([...magicSquare]);

        setTimeout(updateMagicSquare, 200);
      }
    };

    updateMagicSquare();
  };

  return (
    <div className="App container flex flex-col justify-center items-center m-auto pb-20">
      <header className="container m-auto text-center font-bold text-violet-800 text-2xl p-8">
        <p>Magic Square</p>
      </header>
      <div className="container m-auto text-center font-bold text-violet-800 text-2xl mb-2">
        <p>Choose the size of the magic square:</p>
      </div>
      <select
        className="p-4 bg-gray-200 rounded-md"
        onChange={(e) => {
          setSize(parseInt(e.target.value));
        }}
        value={size}
      >
        <option value="3">3x3</option>
        <option value="7">7x7</option>
        <option value="9">9x9</option>
      </select>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        onClick={() => {
          handleCalculate();
        }}
      >
        Calculate
      </button>

      <div className="container m-auto text-center font-bold text-violet-800 text-2xl mt-10">
        <p>Magic Square:</p>
        {magicSquare.map((row, i) => (
          <div key={i} className="flex justify-center">
            {row.map((col, j) => (
              <div key={j} className="p-4 bg-gray-200 rounded-md m-1 w-20 h-20">
                {col === 0 ? "" : col}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
