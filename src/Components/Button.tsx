import { ReactNode } from "react"

interface ButtonProps {
children?:ReactNode;
id?:string,
className?:string
}

const Button = ({children,id, className}:ButtonProps) => {
  return (
   <button id={id} className={`text-xs px-6 py-3  ${className}`}>
       {children}
   </button>
  )
}

export default Button