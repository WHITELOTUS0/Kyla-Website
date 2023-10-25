import { Navigate,Outlet,useNavigate } from "react-router-dom"
import { notify,errorNotification } from "../Toasts/Toast"

const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const isAuthenticated = localStorage.getItem('login')?JSON.parse(localStorage.getItem('login')):false
    
    if(!isAuthenticated){
        errorNotification("Un Authenticated, Please Login !!")
    }else{
        notify("Welcome Back")
    }
   

  return (
      
       isAuthenticated !== true ? <Navigate to ='/login'/> :<Outlet/>
   
  )
}

export default ProtectedRoutes