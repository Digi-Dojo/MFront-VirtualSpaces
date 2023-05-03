import axios from "axios";

const baseURL = 'https://mservice-virtualspaces2.onrender.com'

export const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})