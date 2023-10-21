import React,{useState} from "react";
import { NavLink } from "react-router-dom";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import logo2 from "../Components/Images/logo2.jpg";
import "../css/index.css"

  export function Register() {
    const [showPassword, setShowPassword] = useState(false);

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
          <h1>Create Account</h1>
          <form>
            <div className="grouped">
              <input
                type="text"
                placeholder="username"
                name="username"
              />
            </div>
            <div className="grouped">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="PasswordInputContainer2">
            <div className="grouped">
              <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              name="password" 
              />
              <span
                  onClick={handleClickShowPassword}
                  className="VisibilityIcon"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </span>
            </div>
            <div className="grouped">
              <input
                type=""
                placeholder="grade"
                name="select Grade"
              />
            </div>
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
                // onClick={handleSubmit}
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