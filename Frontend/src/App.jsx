import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/home'


function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
              <Route path='/'  element={<Register />}/>
              <Route path='/login'  element={<Login />}/>
              <Route path='/home'  element={<Home />}/>
            
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
