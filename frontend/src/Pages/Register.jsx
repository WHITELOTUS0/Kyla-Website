import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import logo2 from "../Images/logo2.jpg";
import { axiosInstance } from "../http/http";
import { errorNotification, notify } from "../Toasts/Toast";
import "../css/index.css"

const headers ={
  "Content-Type":"application/json",
  // Authorization: `Bearer ${token}`
}

  export function Register() {
    const navigate = useNavigate();
    const axiosCall = axiosInstance(headers);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        grade:"",
        firstName:"",
        lastName:""
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log('value', value)
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const handleSubmit = async() =>{
      try {
         const response = await axiosCall.post('register',formData)
         console.log('response', response)
         if(response.data.message === "User exists"){
             errorNotification(response.data.message)
             return;
         }
         notify(response.data.message)
         navigate("/login")
      } catch (error) {
         errorNotification("Server Error")
         console.log('error ', error )
         return;
      }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="signUp">
      <div className="left-side">
        <div className="image3">
          <img alt="" src=""/>
        </div>
      </div>
      <div className="right-side">
        <div className="logo2">
          <img alt="Logo_image" src=""/>
        </div>
        <div className="Sect4">
          <h1>Create Account  </h1>
          <form>
            <div className="grouped">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grouped">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="grouped">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="PasswordInputContainer2">
            <div className="grouped">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                name="password" 
                value={formData.password}
                onChange={handleInputChange}
              />
              <span
                  onClick={handleClickShowPassword}
                  className="VisibilityIcon"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </span>
            </div>
            </div>
            <div className="grouped">
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                >
                  <option value="">Select Grade</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                {/* // Add more options as needed */}
              </select>
            </div>
            <div className="terms">
              <span className="agree">
                {" "}
                <input type="checkbox" /> I agree with the{" "}
              </span>
              Terms and Conditions
            </div>
            <div className="grouped">
              <input
                type="button"
                placeholder="SignUp"
                name="SignUp"
                value="Register"
                className="signUp-button"
                onClick={handleSubmit}
              />
            </div>
          </form>
          <div className="OR">
          </div>
          <div className="Already">
            <span>Already have an account?</span>
            <NavLink to="/login">Log in </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}