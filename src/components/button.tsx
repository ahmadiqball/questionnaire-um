import classNames from "classnames"

export function Button({children, light, className, ...props}: any) {
  return(
    <button 
      className={classNames(className, 'w-[238px] sm:w-[238px] h-[52px] rounded-lg flex justify-center items-center border border-purple', {
      'bg-purple text-white': !light,
      'bg-white text-purple': light,
      })}
      {...props}
    >
      {children}
    </button>
  )
}