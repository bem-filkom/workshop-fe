import axios from 'axios';


let token = localStorage.getItem("h0_ni128ehiond1289n")

export default axios.create({
  baseURL:"https://api.hology.my.id/",
  headers:{
    "Authorization" : "Bearer "+ token
  }
})