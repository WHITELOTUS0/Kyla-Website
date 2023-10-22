import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Pages/Quiz/Quiz'
import { Route, Routes } from "react-router-dom";
import { Register } from './Pages/Register'
import Login from './Pages/Login'
import TopBar from './Pages/Design1/TopBar'
import ProtectedRoutes from './navigation/ProtectedRoutes'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route element={<ProtectedRoutes/>}>
            <Route path="index" element={<TopBar/>} />
            <Route path="/quiz" element={<Quiz/>}/>
        </Route>  
      </Routes>
      {/* <Quiz/> */}
      {/* <Register /> */}
 
    </>
  )
}

export default App

