import{request} from "./request"


export function Login(username,password){
  return request({
     url:`/login?username=${username}&password=${password}`,
   })
 }