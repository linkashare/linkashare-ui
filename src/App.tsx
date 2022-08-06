import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Register'
import Login from './Pages/Login'


function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='*' element={<PageNotFound />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
   </Routes>
  )
}

export default App
