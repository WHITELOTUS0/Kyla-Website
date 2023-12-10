
import axios from 'axios'

 const baseURL =  "https://kylaweb-35ac1d07-ca47-496c-8538.cranecloud.io/v1/api"


//  const baseURL =  "http://localhost:4000/v1/api"


export const axiosInstance = (headers) => {
    let api = axios.create({
        baseURL,
        headers:headers
    });

    return api;
}