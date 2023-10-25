import { toast } from "react-toastify";
import './toast.css'

export const errorNotification = async (message) => {
    await toast.error(message, {
      position: "top-center",
      toastId: 5483,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    
    });
  };

 export const notify= async (message) => {
    await toast.success(message, {
      position: "top-center",
      toastId: 5483,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
     
    });
  };