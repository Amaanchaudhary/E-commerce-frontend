import axios from "axios"

export const BaseURL = "http://localhost:8000"
const jwt = localStorage.getItem("jwt")

export const api = axios.create({
  baseURL: BaseURL,
  headers: {
    "Authorization": `Bearer ${jwt}`,
    "Content-Type" : 'application/json'
  }
})
