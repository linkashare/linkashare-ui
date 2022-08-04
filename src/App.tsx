import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register'



function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/register' element={<Register />} />
   </Routes>
  )
}

export default App
