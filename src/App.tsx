import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';


function App() {
  return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='*' element={<PageNotFound />} />
   </Routes>
  )
}

export default App
