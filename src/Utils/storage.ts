export const save = (item:string)=> localStorage.setItem('::connect', item)

export const get = ()=> localStorage.getItem('::connect')

export const clear = ()=> localStorage.clear()