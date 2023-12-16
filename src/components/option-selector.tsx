import { optionList } from "../constants/options";

export function OptionSelector({active, setActive}: any) {
  return(
    <div className="grid grid-cols-2 sm:flex gap-10 lg:gap-20 mt-10 justify-center xl:justify-start z-10">
      {optionList.map((item) => (
        <div key={item.label} className="flex flex-col max-w-[80px] items-center lg:max-w-[106px] text-center mx-auto sm:mx-0 cursor-pointer" onClick={() => setActive(item.label)}>
          {item.label === active ? (
            <div className="h-[100px] w-[100px] bg-[#FBEA93] rounded-[50%] absolute -z-10"/>
          ) : null}
          <img src={item.img} alt={item.label} className="sm:h-16 sm:w-16 md:h-[100px] md:w-[100px]"/>
          <p className="mt-2 text-sm lg:text-base">{item.label}</p>
        </div>
      ))}
    </div>
  )
}