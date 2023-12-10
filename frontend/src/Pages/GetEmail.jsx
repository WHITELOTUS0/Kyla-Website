import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosInstance } from "../http/http";
import { errorNotification, notify } from "../Toasts/Toast";
import "../css/index.css"
import playing from "../assets/agakhanmom1.jpg"

const headers ={
  "Content-Type":"application/json",
}

export default function GetEmail() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: "",
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
       const response = await axiosCall.post('reset',formData)
       console.log('response', response.data)

       if(response.data.succes){
          /* Email sent successfully */
          await notify("Email sent successfully")
          navigate("/")
       }
       await errorNotification(response.data.message)
     
    } catch (error) {
       errorNotification("Server Error")
       console.log('error ', error )
    }
  }

  return (
    <div className="getEmail">
      <div className="top">
        <div className="img-sect">
          <img alt="" src={playing}/>
        </div>

        <div className="form-sect">
          <div>
            <div className="Logo1">
              <img alt="" src=""/>
            </div>
            <h1>Give Us Your Email</h1>
            <form>
              <div className="Log">
                <input
                  type="text"
                  value={formData.value}
                  placeholder="Email Address"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                 <input
                  type="button"
                  name="Send Email"
                  value="Send Email"
                  className="sendEmail-button"
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
