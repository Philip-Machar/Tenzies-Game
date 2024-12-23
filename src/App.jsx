import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6);
      newDice.push({ id: nanoid(), value: randomNum, isHeld: false });
    }
    return newDice;
  };

  const [die, setDie] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleRoll = () => {
    if (!tenzies){
      setDie((prevDie) => {
        return prevDie.map((dice) => {
          if (!dice.isHeld) {
            const newDieArray = allNewDice();
            return newDieArray[Math.ceil(Math.random() * 9)];
          } else {
            return dice;
          }
        });
      });
    }
  };

  const handleRest = () => {
    setDie(allNewDice)
    setTenzies(false)

  }

  const clickedDice = (id) => {
    if (!tenzies){
      setDie((die) => {
        return die.map((dice) => {
          if (dice.id === id) {
            return { ...dice, isHeld: !dice.isHeld };
          } else {
            return dice;
          }
        });
      });
    }
  };

  useEffect(() => {
    const hasWon = () => {
      const allHeld = die.every((dice) => dice.isHeld === true);
      const allEqual = die.every((dice) => dice.value === die[0].value)
      if (allHeld && allEqual){
        setTenzies(true)
      }
    }
    hasWon();
  }, [die])

  return (
    <main className="w-[500px] h-[520px] bg-[#0B2434] grid place-content-center shadow-xl">
      <div className="w-[460px] h-[460px] bg-[#F5F5F5] rounded-xl grid place-items-center p-6 relative">
        {tenzies && <Confetti width="500px" height="520px" />}
        {tenzies && <h1 className="text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2">You Win!!!</h1>}
        {/* Title and description section */}
        <div className="flex flex-col gap-2 text-center px-16">
          <h1 className="text-3xl font-bold">Tenzies</h1>
          <p className="width-[60%]">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        
        {/* Die grid */}
        <div className="grid grid-cols-5 gap-6">
          {die.map((dice) => (
            <Die key={dice.id} dice={dice} clickedDice={clickedDice} />
          ))}
        </div>
        
        {/* Roll button */}
        {
          tenzies ?
          <button
            onClick={handleRest}
            className="w-[150px] h-[50px] bg-[#5035FF] text-white grid place-content-center rounded-lg text-xl font-karla shadow-lg cursor-pointer"
          >
            New Game
          </button> :
          <button
            onClick={handleRoll}
            className="w-[130px] h-[50px] bg-[#5035FF] text-white grid place-content-center rounded-lg text-xl font-karla shadow-lg cursor-pointer"
          >
            Roll
          </button>
        }
      </div>
    </main>
  );
};

export default App;
