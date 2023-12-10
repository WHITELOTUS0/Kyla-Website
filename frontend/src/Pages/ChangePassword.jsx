import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "../css/index.css"
import { axiosInstance } from "../http/http";
import { errorNotification, notify } from "../Toasts/Toast";
import playing from "../assets/agakhanmom1.jpg"

const headers ={
  "Content-Type":"application/json",
  // Authorization: `Bearer ${token}`
}

export default function ChangePassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
      oldPassword: "",
      newPassword: "",
  });
  const axiosCall = axiosInstance(headers);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async() =>{
    try {
       const response = await axiosCall.post('change-password',formData)
       console.log('response', response.data)

       if(response.data.success){
          /* Password changed successfully */
          await notify("Password Changed Successfully")
          navigate("/login")
       }
       await errorNotification(response.data.message)
     
    } catch (error) {
       errorNotification("Server Error")
       console.log('error ', error )
    }
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="login">
      <div className="top">
        <div className="img-sect">
          <img alt="" src={playing}/>
        </div>

        <div className="form-sect">
          <div>
            <div className="Logo1">
              <img alt="" src=""/>
            </div>
            <h1>Change Password</h1>
            <form>
              <div className="Log">
                <input
                  type="password"
                  value={formData.oldPassword}
                  placeholder="Old Password"
                  name="oldPassword"
                  onChange={handleInputChange}
                />
              </div>
              <div className="PasswordInputContainer">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value = {formData.newPassword}
                  name="newPassword"
                  onChange={handleInputChange}
                />
                <span
                  onClick={handleClickShowPassword}
                  className="PasswordVisibilityIcon"
                >
                  {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                </span>
              </div>
              <div>
                 <input
                  type="button"
                  name="Change Password"
                  value="Change Password"
                  className="changePassword-button"
                   onClick={handleSubmit}
              /> 
              </div>
            </form>
            <div className="OR">
            </div>
            <div className="media-options">
            </div>
            <div className="Account">
              <span className="NoAccount">
                Remembered your password? 
              </span>
              <NavLink to="/login"> Login </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
