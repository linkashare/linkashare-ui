import Axios from "../Config/axios";
import { toast } from 'react-toastify'

interface DataInterface {
[key:string]:any
}

export const Post = (url:string ,data:DataInterface , callback?:(data:any, err?:string)=> void )=>{
    Axios.post(url,data)
    .then(res=>{
        callback && callback(res)
    })
    .catch(err=>{
      toast.error(err.message)
      callback && callback(null, err.message)
    })
}