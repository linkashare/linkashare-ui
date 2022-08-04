import { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
<Fragment>
  <Helmet>
    <title>Link-A-share | Home</title>
  </Helmet>
    <main id="home" className=''>
      <header>
        <Navbar />
      </header>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className='font-gotham text-primary text-9xl md:lg sm:md'>Linkashare</div>
        <p>timi gbetrabaye from here</p>
        <Link to='/login'>Login</Link>
      </div>
    </main>
</Fragment>
  )
}

export default Home