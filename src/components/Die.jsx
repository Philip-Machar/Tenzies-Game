const Die = (props) => {
  return (
    <div className="w-[55px] h-[55px] bg-white grid place-content-center rounded-lg shadow-lg cursor-pointer">
      <div className="text-[#2B283A] font-bold text-xl">{props.value}</div>
    </div>
  )
}

export default Die
