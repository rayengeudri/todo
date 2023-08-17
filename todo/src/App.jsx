import { useState } from 'react'

import './App.css'
import { Routes,BrowserRouter,Route } from  "react-router-dom"
import SignUp from "./component/signup"
import TodoWrapper from './component/TodoWrapper'
import SignIn from './component/Login'
import Home from './component/home'
import Update from './component/update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='app-container'>
    <Routes>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/TodoWrapper' element={<TodoWrapper />}/>
       <Route path='/login' element={<SignIn/>}/>
       <Route path='/' element={<Home/>}/>  
       <Route path='/update' element={<Update/>}/>

    </Routes>
      
      
      
       </div>
    
   
    
    
    </BrowserRouter>
   
  )
}

export default App
