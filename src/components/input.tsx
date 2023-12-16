import { forwardRef, useState } from "react"

export const InputText = forwardRef<HTMLInputElement, any>(({label, placeholder, className, ...props}, ref) => {
  return(
    <div className={className}>
      <label>{label}</label>
      <input
        ref={ref} 
        type="text" 
        className="w-full outline-none border border-[#C2C2C2] rounded-md px-3 py-1.5 placeholder:text-[#757575] placeholder:text-base"
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
})

export const InputRadio = forwardRef<HTMLInputElement, any>(({options, label, className, ...props}, ref) => {
  const [value, setValue] = useState<string>();

  return (
    <div className={className}>
      <input ref={ref} className="w-0 h-0 hidden" value={value} {...props}/>
      <p>{label}</p>

      <div className="flex gap-2">
        {options.map((option: string) => (
          <div onClick={() => setValue(option)} className="flex gap-1 items-center cursor-pointer" key={option}>
            {value === option ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8.5" fill="#E0E0E0" stroke="#583BAD"/>
                <circle cx="9" cy="9" r="4.5" fill="#583BAD" stroke="#583BAD"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8.5" fill="#E0E0E0" stroke="#583BAD"/>
              </svg>
            )}
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  )
})

