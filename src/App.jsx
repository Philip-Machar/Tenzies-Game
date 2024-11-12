import React from "react"
import Die from "./components/Die"

const App = () => {
  return (
    <main className="w-[500px] h-[520px] bg-[#0B2434] grid place-content-center shadow-xl">
      <div className="w-[460px] h-[460px] bg-[#F5F5F5] rounded-xl flex justify-center items-center">
        <div className="grid grid-cols-5 gap-6">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={7} />
          <Die value={8} />
          <Die value={9} />
          <Die value={10} />
        </div>
      </div>
    </main>
  )
}

export default App
