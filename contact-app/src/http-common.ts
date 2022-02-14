import axios from "axios";

export default axios.create({
  baseURL: "https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});