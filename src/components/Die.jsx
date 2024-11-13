const Die = (props) => {
  return (
    <div 
        onClick={() => props.clickedDice(props.dice.id)} 
        className={`w-[55px] h-[55px] ${props.dice.isHeld ? "bg-[#59E391]" : "bg-white"} grid place-content-center rounded-lg shadow-lg cursor-pointer`}
    >
      <div className="text-[#2B283A] font-bold text-xl">{props.dice.value}</div>
    </div>
  )
}

export default Die
