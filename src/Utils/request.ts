import Axios from "../Config/axios";

interface DataInterface {
[key:string]:any
}

export const Post = (url:string ,data:DataInterface , callback?:(data:any, err?:string)=> void )=>{
    Axios.post(url,data)
    .then(res=>{
        callback && callback(res)
    })
    .catch(err=>{
      console.error(err);
      callback && callback(null, err.message)
    })
}