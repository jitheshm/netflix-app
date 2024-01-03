import axios from 'axios'
import {baseURL} from "../src/constants/constant"

const instance = axios.create({
    baseURL:String(baseURL) ,
    
   
  });

  export default instance;