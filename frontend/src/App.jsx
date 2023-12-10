import { useState } from 'react'
import './App.css'
import Quiz from './Pages/Quiz/Quiz'
import { Route, Routes } from "react-router-dom";
import { Register } from './Pages/Register'
import Login from './Pages/Login'
import TopBar from './Pages/Design1/TopBar'
import About from './Pages/About'
import ProtectedRoutes from './navigation/ProtectedRoutes'
import Index from './Pages/Index';
import ChangePassword from './Pages/ChangePassword';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="index" element={<Index />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/changepassword" element={<ChangePassword/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

