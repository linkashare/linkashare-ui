import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Account from './Pages/Account'


function App() {
  return (
   <Routes>

     <Route path='/' element={<Home />} />
     <Route path='*' element={<PageNotFound />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
     <Route path="/account/:userid" element={<Account />} />
     
   </Routes>
  )
}

export default App
