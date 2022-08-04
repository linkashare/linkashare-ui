import {ReactNode} from'react'

interface InputInterface{
  type:string,
  placeholder?:string,
  label:string,
  icon?:ReactNode
}

const Input = ({type,placeholder,label,icon}:InputInterface) => {
  return (
    <div className='my-8 p-3 ring-1 ring-primary relative'>
        <label className='absolute text-dark px-1 font-bold bg-white text-sm -top-3' htmlFor="">{label}</label>
        <div className="flex items-center justify-between">
            <input type={type} className='outline-none w-full' placeholder={placeholder} />
            <span>
                {icon}
            </span>
        </div>
    </div>
  )
}

export default Input