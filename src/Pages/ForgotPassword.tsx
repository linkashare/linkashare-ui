import AuthBanner from '../Layout/AuthBanner';
import Input from '../Components/Input'
import {FaEnvelope} from 'react-icons/fa'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Post} from '../Utils/request'
import {save as StorageSave} from '../Utils/storage'

const ForgottenPassword = ()=>{
     const [state, setState] = useState({
    username:'',
  })

  const [token , setToken] = useState(0)
  const [tokenVal, setTokenVal]=useState('')

  const [password, setPassword] = useState({
    username:'',
    newPassword:''
  })

  // 1 = enter username
  // 2 = enter token
  // 3 = change password
  const [step, setStep] = useState(1)

  const [progress, setProgress] = useState({
    error:[false, undefined],
    loading:false
  })
    return(
        <main className='min-h-screen flex bg-dark text-white'>
        <AuthBanner  heading='Recover your Account' subHeading='Continue to store links from where you stop' suggest={(
            <p className='absolute top-0 text-xs p-4'>
            <span className="opacity-80"> Login with Password </span> <Link to='/login' className='text-primary transition-all underline hover:decoration-double'>Login</Link>
              </p>
          )}>
           
           <form className="" onSubmit={(e)=>{
       e.preventDefault();
       //  validate 
       setProgress({
        ...progress,
        loading:true
      })
    
      if(step==1){
        Post('/gettoken.php',state,(res,err)=>{
          if (err) {
             return setProgress({
                  loading:false,
                  error:[true, undefined]
                })
          }
          setProgress({
            loading:false,
            error:[false, undefined]
          })
          // data
          console.log(res)
          if(res.data['Token']){
            setStep(2)
            setToken(res.data.Token)
          //  window.location.assign('/account')
          }

      })
      }

      // step 2
      if(step == 2){
        //compare tokens here
        console.log('Comparing...')
        if(token == Number(tokenVal)){
            setStep(3)
          return setProgress({
            loading:false,
            error:[false, undefined]
          })
        }
        // return error here
        setProgress({
          loading:false,
          error:[true, undefined]
        })
      }
      // step 3
      if(step == 3){
        console.log('Changing Password')
        Post('/updatepassword.php',password,(res,err)=>{
          if (err) {
             return setProgress({
                  loading:false,
                  error:[true, undefined]
                })
          }
          
          if(res.data[0]=='Success'){
            // return messgae and redirect to login
              return setProgress({
                  loading:false,
                  error:[false, undefined]
                })
            window.location.replace('/login')
          }

        })
      }

        
      }}>

       {
         step == 1 ? (
          <Input
          type="text"
          label="Username"
          placeholder="praisecode"
           onChange={(e:any)=> setState({username:e.target.value})}
          icon={<FaEnvelope />}
        />
         ) : 
         step == 2 ? (
          <Input
          type="number"
          label="Token"
          placeholder="- - - -"
          defaultValue={tokenVal}
           onChange={(e:any)=> setTokenVal(e.target.value)}
          icon={<FaEnvelope />}
        />
         ) :
         step == 3 ? (
           <div>
              <Input
          type="password"
          label="New Password"
          placeholder="********"
           onChange={(e:any)=> setPassword({username:state.username, newPassword:e.target.value})}
          icon={<FaEnvelope />}
        />
  
           </div>
         ) : <span />
       }

        <div>
          <button disabled={progress.loading} className={`p-5 py-4 text-white hover:text-dark hover:bg-white transition-colors my-6 cursor-pointer w-full bg-primary disabled:pointer-events-none disabled:opacity-60 disabled:select-none`}>
            {progress.loading ?(
              <div className="">
                Please Wait ...
              </div>
            ): 'Continue'}
          </button>
        </div>
      </form>

        </AuthBanner>
        </main>
    )
}

export default ForgottenPassword