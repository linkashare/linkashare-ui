import {ReactNode} from'react'

interface InputInterface{
  type:string,
  placeholder?:string,
  label:string,
  defaultValue?:string,
  onChange?:any ;
  icon?:ReactNode
}

const Input = ({type,placeholder,label,icon,onChange,defaultValue}:InputInterface) => {
  return (
    <div className='my-8 p-3 ring-1 ring-primary relative'>
        <label className='absolute text-white px-1 font-bold bg-dark text-sm -top-3' htmlFor="">{label}</label>
        <div className="flex items-center justify-between">
            <input onChange={onChange} id={label} name={label} type={type} defaultValue={defaultValue} className='outline-none w-full bg-transparent' placeholder={placeholder} />
            <span>
                {icon}
            </span>
        </div>
    </div>
  )
}

export default Input