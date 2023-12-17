import classNames from "classnames";
import { forwardRef, useRef, useState } from "react"

export const InputText = forwardRef<HTMLInputElement, any>(({label, placeholder, className, error, dirtyFields, ...props}, ref) => {
  return(
    <div className={classNames('relative',className)}>
      <label>{label}</label>
      <input
        ref={ref} 
        type={props.type || 'text'}
        className={`w-full outline-none border rounded-md pl-3 pr-6 py-1.5 placeholder:text-[#757575] placeholder:text-base 
        ${error ? 'border-red' : dirtyFields ? 'border-[#43936C]' : 'border-[#C2C2C2]'}`}
        placeholder={placeholder}
        {...props}
      />
      {dirtyFields && !error ? <img src="/assets/valid.svg" className="absolute right-2 bottom-2.5"/> : null}
      {error ? <img src="/assets/error.svg" className="absolute right-2 bottom-2.5"/> : null}
    </div>
  )
})

export const InputRadio = forwardRef<HTMLInputElement, any>(({options, label, className, error, ...props}, ref) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={className}>
      <p className="flex gap-2">
        {label}
        {error ? <img src="/assets/error.svg" className="mt-0.5"/> : null}
      </p>

      <div className="flex gap-2">
        {options.map((option: string) => (
          <label onClick={() => setValue(option)} className="flex gap-1 items-center cursor-pointer" key={option}>
            <input ref={ref} className="w-0 h-0 hidden" value={option} {...props} type="radio" />
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
          </label>
        ))}
      </div>
    </div>
  )
})

