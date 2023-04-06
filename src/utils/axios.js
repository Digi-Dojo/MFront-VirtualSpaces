import axios from "axios";

const baseURL = ''

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})