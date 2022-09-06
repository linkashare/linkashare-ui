import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Account from './Pages/Account'
import ForgotPassword from './Pages/ForgotPassword'


function App() {
  return (
   <Routes>

     <Route path='/' element={<Home />} />
     <Route path='*' element={<PageNotFound />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
     <Route path="/account" element={<Account />} />
     <Route path="/forgotten-password" element={<ForgotPassword />} />
     
   </Routes>
  )
}

export default App
