import axios from "axios"

export const BaseURL = "https://e-commerce-backend-ef1s.onrender.com"
const jwt = localStorage.getItem("jwt")

export const api = axios.create({
  baseURL: BaseURL,
  headers: {
    "Authorization": `Bearer ${jwt}`,
    "Content-Type" : 'application/json'
  }
})
