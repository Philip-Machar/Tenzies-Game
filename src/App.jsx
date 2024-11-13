import React, { useState } from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid";

const App = () => {
  const allNewDice = () => {
    const newDice = [];

    for(let i=0; i < 10; i++){
      const randomNum = Math.ceil(Math.random() * 6);
      newDice.push({id: nanoid(), value: randomNum, isHeld: false})
    }

    return newDice;
  };

  const [die, setDie] = useState(allNewDice());

  const handleRoll = () => {
    setDie(allNewDice());
  };

  const clickedDice = () => {

  };

  return (
    <main className="w-[500px] h-[520px] bg-[#0B2434] grid place-content-center shadow-xl">
      <div className="w-[460px] h-[460px] bg-[#F5F5F5] rounded-xl grid place-content-center relative">
        <div className="grid grid-cols-5 gap-6">
          {
            die.map((dice) => {
              return (
                <Die key={nanoid()} dice={dice}/>
              )
            })
          }
        </div>
        <button 
          onClick={handleRoll}
          className="w-[130px] h-[5-px] bg-[#5035FF] text-white grid place-content-center p-3 rounded-lg text-xl font-karla absolute left-1/2 transform -translate-x-1/2 bottom-16 shadow-lg cursor-pointer"
        >
          Roll
        </button>
      </div>
    </main>
  )
}

export default App
