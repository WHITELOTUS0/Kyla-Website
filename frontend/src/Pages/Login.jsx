import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import Button from "@mui/material/Button";
import "../css/index.css"
import { axiosInstance } from "../http/http";
import { errorNotification, notify } from "../Toasts/Toast";
import playing from "../assets/agakhanmom1.jpg"

const headers ={
  "Content-Type":"application/json",
  // Authorization: `Bearer ${token}`
}

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const handleForgotPasswordOpen = () => setForgotPasswordOpen(true);
  const handleForgotPasswordClose = () => setForgotPasswordOpen(false);
  const [formData, setFormData] = useState({
      email: "",
      password: "",
  });
  const axiosCall = axiosInstance(headers);

  const [input,setInput]=useState({
       email:'',
       password:''
  });
  /*set forget password set */
  const [email,setEmail]=useState('')

  const resetForm = () => {
    setInput({
      email: '',
      password: ''
    });
  };

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
       const response = await axiosCall.post('login',formData)
       console.log('response', response.data)

       if(response.data.login){
          /* Store jwt_token in local storage */
          await notify("Login SuccessFul")
          localStorage.clear()
          localStorage.setItem("jwt_token", response.data.jwt_token)
          localStorage.setItem('login',true)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          navigate("/index")
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
            <h1>Log in 
              {/* {JSON.stringify(input)} */}
              </h1>
            <form>
              <div className="Log">
                <input
                  type="text"
                  value={formData.value}
                  placeholder="Email Address"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="PasswordInputContainer">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value = {formData.password}
                  name="password"
                  onChange={handleInputChange}
                />
                <span
                  onClick={handleClickShowPassword}
                  // className={`PasswordVisibilityIcon ${showPassword ? "visible" : ""}`}
                  className="PasswordVisibilityIcon"
                >
                  {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                </span>
              </div>
              <div>
             
                 <input
                  type="button"
                  name="Sign in"
                  value="Log in"
                  className="signUp-button"
                   onClick={handleSubmit}
              /> 
              {/* <button
                 type="button"
                 placeholder="Sign in"
                 name="Sign in"
                 value="Log in"
                 className="signUp-button"
                 onClick={handleSubmit}
              > */}
                  {/* Sign In */}
              {/* </button> */}
            
              </div>
            </form>
            <div className="Remember">
            <p className="P5" onClick={handleForgotPasswordOpen} style={{cursor:'pointer'}}>Forgot Password?</p>
            </div>
            <div className="OR">
            </div>
            <div className="media-options">
            </div>
            <div className="Account">
              <span className="NoAccount">
                Have no account? 
              </span>
              <NavLink to="/"> Register </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <Dialog open={forgotPasswordOpen} onClose={handleForgotPasswordClose} style={{margin:"20px"}}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent> */}
          {/* Add your forgot password content here */}
          {/* <p>Enter your email to reset your password</p>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            style={{height:"5%",border:"1px solid black",borderRadius:"5px",padding:"10px",marginTop:"10px"}}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" style={{marginRight:"auto",marginRight:"160px",marginBottom:"10px",marginTop:"10px"}}onClick={handleForgotPasswordClose}>Cancel</Button>
          <Button color="success" variant="contained" 
            style={{backgroundColor:"#6abd45",marginLeft:"auto",marginBottom:"10px",marginRight:"0px"}} 
            onClick={handleEmailSubmit}>
             Submit
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}