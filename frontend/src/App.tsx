

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'
import { Signin } from './pages/Signin'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/blog' element={<Blog/>}/>
   
    </Routes>
    
    </BrowserRouter>

      
     
    </>
  )
}

export default App
