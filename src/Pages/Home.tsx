import { Fragment } from 'react'
import logo from '../Assets/logo.svg'
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
<Fragment>
  <Helmet>
    <title>Link-A-share | Home</title>
  </Helmet>
<main id="home">
        <div className="h-screen bg-dark w-screen flex justify-center">
        <img src={logo} alt="ReactLogo" className='transition-colors cursor-pointer w-1/3 logo react'/>
        <img src={'/vite.svg'} alt="Logo" className='transition-colors cursor-pointer w-1/3 logo'/>
        </div>
    </main>
</Fragment>
  )
}

export default Home